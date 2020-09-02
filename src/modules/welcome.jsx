import React from 'react'

import neumorphismUI from '../neumorphism.module.css'
import styles from './welcome.module.css'

class Welcome extends React.Component {
  constructor () {
    super()
    this.fileInput = React.createRef()
  }

  handleUpload () {
    var files = this.fileInput.current.files
    this.props.returnFile(URL.createObjectURL(files[0]))
  }

  render () {
    return (
      <div className={styles.welcomeCore + ' ' + neumorphismUI.neumorphLeft}>
        <h1><span role='img' aria-label='emoji' className={this.props.emoji.fade ? styles.emojiFade : null}>{this.props.emoji.emoji}</span><br />EmojiVisualiser</h1>
        <p>Get Started by selecting a Audio File</p>
        <button onClick={() => this.fileInput.current.click()} className={neumorphismUI.neumorphLeft + ' ' + neumorphismUI.neumorphLeftHover}>Select Audio</button>
        <input accept='.mp3,audio/*' type='file' ref={this.fileInput} onChange={() => this.handleUpload()} style={{ display: 'none' }} />
      </div>
    )
  }
}

export default Welcome
