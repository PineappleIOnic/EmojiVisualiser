/* global AudioContext requestAnimationFrame */
import React from 'react'

import neumorphismUI from '../../neumorphism.module.css'
import styles from './visualiser.module.css'

// Emoji's Grouped by colour

const emojiRed = ['⛔', '🚫', '🔞', '📵', '🚷', '🚳', '🚭', '🚯', '🚱', '📛', '❌', '🅰️', '🆎️', '🅱️', '🅾️', '🆘️', '🈹️', '㊗️', '㊙️', '🈲️', '🈵️', '🈴️', '🉐️', '⛩', '♨️', '🔴', '🔺️', '🔻', '🚩', '🍓', '🍅', '🌂', '👅', '👄', '🎴', '❣', '💢', '🦀', '🦖', '🌹', '🥀', '🐞', '🍁', '🌡', '🍎', '😡', '🤬', '🍄', '💮', '💃', '🚗', '💄', '📿', '👠', '🍟', '🎪', '📌', '📍', '🛑']
const emojiOrange = ['👹', '👺', '🧡', '💥', '🍂', '🏀', '🦋', '🎃', '🌋', '🔶️', '🔸️', '⛺', '🔥', '〽️', '🍊', '☄', '📙', '🥕', '🐡', '🔒', '🔓', '🔏', '🈶️', '🈸️', '🈷️', '🉑️', '🈺️', '🈚️']
const emojiYellow = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😴', '😓', '🙁', '😖', '😔', '😌', '😥', '😮', '😛', '😕', '😞', '😟', '🙃', '😜', '🤐', '😯', '😝', '🤑', '😤', '😢', '😲', '😪', '😫', '😒', '😭', '😦', '😧', '😳', '😨', '😱', '🤪', '😵', '😩', '😺', '😸', '😹', '😻', '😼', '🤮', '😽', '🙀', '😿', '😾', '👶', '🧒', '👦', '👧', '🧑', '👨', '👩', '👴', '🧓', '👵', '🌔', '🌕', '🌖', '🌗', '🌙', '☀️', '🌜', '🌛', '📯', '🔔', '📒', '🌟', '⭐', '🌞', '🌝', '🌤', '⚡', '⚠️', '🚸', '💪', '👈', '👉', '☝️', '👆', '🖕', '👇', '✌', '🤞', '🖖', '🤘', '🤙', '🖐', '✋', '👌', '👍', '👎', '✊', '👊', '🤛', '🤜', '🤚', '👋', '🤟', '✍', '👏', '👐', '🙌', '🤲', '🙏', '🤝', '💅', '👂', '👃', '🎖', '🏅', '🥇', '💛', '🍺', '🍻', '🥂', '📂', '📂', '✏', '💫', '👑', '🍋', '🍌', '🌽', '🧀', '🍯']
const emojiGreen = ['⛳', '🍈', '🍏', '🥝', '🥒', '🥦', '🥑', '🍐', '🐦', '🐍', '🐲', '🐉', '🦕', '🐸', '🐊', '🐢', '🐛', '🌲', '🌳', '🍀', '🌿', '☘', '🌱', '🌵', '🌴', '🌾', '🤢', '👽', '💚', '🧣', '🎄', '⛰', '🚃', '🚲', '🚜', '🛣', '🔋', '📗', '💴', '💵', '💶', '💷', '💸', '🔫', '⚙', '⚖', '♻️', '📶', '📳', '🈯️']
const emojiBlue = ['🌀', '💧', '🌊', '🌐', '📱', '📲', '🚮', '🚾', '🛂', '🚰', '♿', '🛃', '🛄', '🚹', '🛅', '🚺', '🚻', '💺', '🛰', '🐳', '🐟', '📺', '🖊', '🧞‍♂️', '🐋', '⬆️', '↗️', '➡️', '↘️', '⬇️', '⤴️', '↙️', '⬅️', '⤵️', '🔃', '🔄', '🔀', '🔁', '🔂', '▶️', '⏩', '⏭', '⏯', '◀️', '⏪', '⏮', '🔼', '⏫', '🔽', '⏬', '⏸', '⏹', '⏺', '🎦', '🔠', '🔡', '🆒️', '🔢', '🔣', '🆓️', '🔤', 'Ⓜ️', '➰', '🎧', '➿', '🆕️', '🆖️', '🈁️']
const emojiPurple = ['󠁧󠁢😈', '👿', '👾', '🧕', '🕺', '💜', '🐙', '🍆', '🍇', '🎀', '🌌', '🎵', '🎶', '🔮', '🛐', '☯️', '🕎', '🔯', '♈', '♎', '♏', '♐', '♉', '♊', '♑', '♒', '♋', '♌', '♓', '⛎', '♍', '🈳️', '🦑']
const emojiRandom = ['🏈', '🎻', '🛀', '👻', '🧖‍♀️', '🧖‍♂️', '💀', '☠', '🍙', '🍚', '🥛', '🥡', '🥛', '🍴', '🥄', '🔪', '🍽', '🍶', '🏉', '🏐', '🎾', '🏸', '🥋', '📧', '📨', '📩', '🥅', '💒', '🏩', '🏪', '🏫', '🏬', '🏭', '🏯', '🏰', '🕍', '🕌', '⛪', '🚄', '🚅', '🚇', '🚔', '🚐', '🚑', '🚎', '📃', '🕯', '🚍', '🔗', '⛓', '🛒', '📷', '📸', '💿', '📀', '📈', '📉', '🗒', '🔑', '⚱', '🎹', '🖱', '🌚', '❔', '❕', '❗', '⁉️', '✴', '🇦🇫', '🕋', '🌃', '⛼', '🚥', '🚦', '🚢', '🌫', '🎱']

const pepega = [emojiRed, emojiOrange, emojiYellow, emojiGreen, emojiBlue, emojiPurple, emojiRandom]

class VisualiseEngine {
  constructor (audioURL, audioRef, state) {
    // Grab audio from DOM
    const audioDOM = audioRef.current

    // Change SRC of audioDOM
    audioDOM.src = audioURL
    audioDOM.load()
    audioDOM.play()

    // Create a audio context
    this.context = new AudioContext()
    var src = this.context.createMediaElementSource(audioDOM)
    this.analyser = this.context.createAnalyser()

    src.connect(this.analyser)
    this.analyser.connect(this.context.destination)

    this.analyser.fftSize = 128
    this.bufferLength = this.analyser.frequencyBinCount
    this.dataArray = new Uint8Array(this.bufferLength)
    this.analyser.getByteTimeDomainData(this.dataArray)
    this.renderFrame = this.renderFrame.bind(this)
    this.state = state

    this.renderFrame()
  }

  renderFrame () {
    this.drawVisual = requestAnimationFrame(this.renderFrame)
    this.analyser.getByteFrequencyData(this.dataArray)

    this.state.setState({ visualiseData: Array.from(this.dataArray).splice(0, 45) })
  }
}

class Visualiser extends React.Component {
  constructor () {
    super()
    this.state = { visualiseData: [] }
    this.audioRef = React.createRef()
  }

  createVisualiser () {
    this.VisualiseEngine = new VisualiseEngine(this.props.audioURL, this.audioRef, this)
  }

  componentDidMount () {
    this.createVisualiser()
  }

  rerenderStuff () {
    const render = []
    const barWidth = window.innerWidth / this.state.visualiseData.length
    this.state.visualiseData.forEach((element, index) => {
      const miniRender = []
      for (let i = 0; i < element / 10; i++) {
        const emojiRange = pepega[Math.round(index / pepega.length)]
        if (emojiRange === undefined) {
          continue
        }
        miniRender.push(<div>{emojiRange[Math.floor(Math.random() * Math.floor(emojiRange.length))]}</div>)
      }
      render.push(<div className={styles.emojiBar} style={{ width: barWidth, left: barWidth * index }}>{miniRender}</div>)
    })
    return render
  }

  render () {
    const Render = this.rerenderStuff()
    return (
      <div className={styles.visualiserCore}>
        <div onClick={() => this.props.return()} className={neumorphismUI.neumorphLeft + ' ' + styles.returnButton + ' ' + neumorphismUI.neumorphLeftHover} />
        <audio ref={this.audioRef} />
        <div className={styles.visualiserRender}>
          {Render}
        </div>
      </div>
    )
  }
}

export default Visualiser
