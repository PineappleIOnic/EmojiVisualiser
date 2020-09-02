import React from 'react'
import './App.css'

import Welcome from './modules/welcome'

import Visualiser from './modules/visualiser/visualiser'

class App extends React.Component {
  constructor () {
    super()
    this.emojis = ['🍣', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '🤯', '😳', '🥵', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤑', '🤠', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾']
    this.state = { currentEmoji: '🍣', emojiFadeOut: false, fileLoaded: false, theme: 0 }
  }

  async componentDidMount () {
    await new Promise(resolve => setTimeout(resolve, 5000))
    this.incrementEmoji()
  }

  async incrementEmoji () {
    await this.setState({ emojiFadeOut: true })
    await new Promise(resolve => setTimeout(resolve, 250))
    await this.setState({ currentEmoji: this.emojis[Math.floor(Math.random() * Math.floor(this.emojis.length))] })
    document.title = `${this.state.currentEmoji} EmojiVisualiser`
    await this.setState({ emojiFadeOut: false })
    await new Promise(resolve => setTimeout(resolve, 5000))
    this.incrementEmoji()
  }

  processMP3 (file) {
    this.setState({ fileLoaded: file, theme: 1 })
  }

  render () {
    let theme = 'light-theme'
    switch (this.state.theme) {
      case 0: {
        theme = 'light-theme'
        break
      }
      case 1: {
        theme = 'dark-theme'
        break
      }
      default: {
        theme = 'light-theme'
        break
      }
    }

    return (
      <div className={theme + ' AppCore'}>
        {!this.state.fileLoaded &&
          <Welcome emoji={{ emoji: this.state.currentEmoji, fade: this.state.emojiFadeOut }} returnFile={(file) => this.processMP3(file)} />}
        {this.state.fileLoaded &&
          <Visualiser audioURL={this.state.fileLoaded} return={() => this.setState({ fileLoaded: false, theme: 0 })} />}
      </div>
    )
  }
}

export default App
