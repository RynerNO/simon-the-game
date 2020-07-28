<template lang="pug">
  div
    h1 Simon The Game
    div.game-container
      div.squares-container
        p.squares-container__text(v-if="!game.active") Чтобы начать нажмите Старт
        p.squares-container__text(v-if="game.active && !game.wait.status") Запоминайте
        p.squares-container__text(v-if="game.active && game.wait.status") А теперь повторите
        div.square(v-for="(square, index) in squares" :key="index" :style="{'background-color': square.colorDefault}" :ref="square.refName" @click="checkInput(index)" :class="{'square_cursor': game.active && game.wait.status }")
      div.controls
        h3 Раунд: {{ game.round }}
        p(v-if="game.failed") Вы проиграли после {{ game.fail.rounds }} раундов
        button(@click.prevent="gameStart" v-if="!game.active") Старт
        button(@click.prevent="gameStop" v-if="game.active") Стоп
        h2 Уровни сложности:
          div.controls__difficulty-radio
            div
              input(type="radio" name="difficulty" value="easy" v-model="game.difficulty")
              label Легкий
            div
              input(type="radio" name="difficulty" value="medium" v-model="game.difficulty")
              label Средний
            div
              input(type="radio" name="difficulty" value="hard" v-model="game.difficulty")
              label Сложный

</template>

<script>
import soundOne from '@assets/1.ogg'
import soundTwo from '@assets/2.ogg'
import soundThree from '@assets/3.ogg'
import soundFour from '@assets/4.ogg'
export default {
  data() {
    return {
      game: {
        round: 0,
        active: false,
        failed: false,
        difficulty: 'easy',
        delay: {
          easy: 1.5,
          medium: 1,
          hard: 0.4
        },
        input: [],
        order: [],
        wait: {
          status: false,
          resolve: '',
          reject: ''
        },
        fail: {
          rounds: ''
        }
      },
      squares: [{
        colorDefault: '#ff7a70',
        colorActive: '#ff1b0a',
        sound: soundOne,
        refName: 'red'
      },
      {
        colorDefault: '#ffffa6',
        colorActive: '#ffff05',
        sound: soundTwo,
        refName: 'yellow'
      },
      {
        colorDefault: '#c0ff8a',
        colorActive: '#7dff0d',
        sound: soundThree,
        refName: 'green'
      },
      {
        colorDefault: '#74c3f7',
        colorActive: '#19a4ff',
        sound: soundFour,
        refName: 'blue'
      },]
    }
  },
  methods: {
    async gameStart() {
        if(this.game.active) return
        this.game.active = true
        this.game.failed = false
        this.game.round = 0
        while(this.game.active) {
          this.game.order = this._getRandomOrder()
          await this._showCombination(this.game.order)
          await this._sleep(0.7) // Добавил задержку для более плавной игры
          await this._waitInput().then(() => { // Если ответил правильно, начинаем следующий раунд
            this.game.round++
            this.game.wait.status = false
          }, 
          () => { // Если юзер сфейлил
            this.game.active = false
            this.game.failed = true
            this.game.fail.rounds = this.game.round
            this.game.wait.status = false
          })
          await this._sleep(2) // Без задержки кнопка в след. раунде может совпасть с последней нажатой кнопкой в этом раунде
        }
        
    },
    gameStop() {
      this.game.active = false
      this.game.failed = true
      this.game.fail.rounds = this.game.round
      this.game.wait.status = false
    },
    checkInput(i) {
      if(!this.game.active || !this.game.wait.status) return
      this._squareActive(i)
      
      if(i === this.game.order[0]) { // Если нажатая кнопка совпадает с кнопкой в последовательность, то вырезаем значение из массива
        this.game.order.splice(0, 1)
      } else {
        this.game.wait.reject()
      }
      if(this.game.order.length === 0) {
        this.game.wait.resolve()
      }
    },
    _waitInput() {
      return new Promise((resolve, reject) => {
        this.game.wait.resolve = resolve
        this.game.wait.reject = reject
        this.game.wait.status = true
      })
    },
    _playSound(sound) {
      return new Promise((resolve) => {
        const audio = new Audio(sound)
        audio.play()
        audio.addEventListener('ended', resolve)
      })
      
    },
    _sleep(seconds) {
      let miliseconds = seconds * 1000
      return new Promise((resolve) => {
        setTimeout(resolve, miliseconds)
      })
    },
    async _showCombination(order) {
      for(let i of order) {
        this._squareActive(i) // Если "ждать" промис, то задержка между кнопками в последовательности выше, а если не "ждать", то иногда на высокой сложности кнопка мгновенно нажимается дважды
        if(order.indexOf(i) === order.length - 1) {
          break
        }
        await this._sleep(this.game.delay[this.game.difficulty])
      }
    },
    async _squareActive(i) { // подсвечивает кнопку и проигрывает звук
        const square = this.squares[i]
        const el = this.$refs[square.refName][0]
        el.style.backgroundColor = square.colorActive
        await this._playSound(square.sound)
        el.style.backgroundColor = square.colorDefault
    },
    _getRandomInt() {
      let min = 0 
      let max = 3
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    _getRandomOrder() {
      let quantity = this.game.round + 2
      const order = []
      while (quantity > 0) {
        order.push(this._getRandomInt())
        quantity--
      }
      return order
    }

  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')
  body 
    background: #222
    color: #fff
    display: flex
    align-items: center
    justify-content: center
    height: 100vh
    font-family: 'Montserrat', sans-serif
  .squares-container
    display: grid
    grid-template-columns: repeat(2, 1fr)
    
    &__text
      width: 100%
      grid-column: span 2
      text-align: center
      font-size: 25px
  .square
    width: 200px
    height: 200px
    pointer-events: none
    &_cursor
      cursor: pointer
      pointer-events: auto
  .game-container
    display: flex
.controls
  margin-left: 2rem
  h3
    font-size: 28px
  button
    padding: 0.5rem 2rem
    background: #66f7f3
    outline: none
    border: none
    border-radius: 4px
    cursor: pointer
  &__difficulty-radio
    display: flex
    flex-direction: column
    label
      margin-left: 0.6rem
</style>