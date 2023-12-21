// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timeinSeconds: 25 * 60,
    minites: (25 * 60) / 60,
    mini: 25,
    isStarted: false,
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  onReset = () => {
    clearInterval(this.timerID)
    this.setState({timeinSeconds: 25 * 60, isStarted: false})
  }

  onStart = () => {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        timeinSeconds: prevState.timeinSeconds - 1,
        minites: Math.floor((prevState.timeinSeconds - 1) / 60),
      }))
    }, 1000)
  }

  onPause = () => {
    clearInterval(this.timerID)
    this.setState({isStarted: false})
  }

  onIncrement = () => {
    this.setState(prevState => {
      const {mini} = prevState
      return {mini: mini + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      const {mini} = prevState
      if (mini > 1) {
        return {mini: mini - 1}
      }
      return {mini}
    })
  }

  onHandlePlay = () => {
    const {isStarted} = this.state
    this.setState({isStarted: !isStarted})
    if (isStarted) {
      this.onPause()
    } else {
      this.onStart()
    }
  }

  render() {
    const {timeinSeconds, minites, mini, isStarted} = this.state
    let min = mini
    let sec = timeinSeconds % 60
    min = minites < 10 ? `0${minites}` : minites
    sec = sec < 10 ? `0${sec}` : sec

    return (
      <div className="bg">
        <h1>Digital timer</h1>
        <div className="timer-card">
          <div className="running-timer">
            <div className="circle">
              <h1 className="time">
                {min}:{sec}
              </h1>
              <p className="status">{isStarted ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="btn-card">
            <div className="btn-container">
              <div className="btn-c">
                <button type="button" onClick={this.onHandlePlay}>
                  <img
                    alt={isStarted ? 'pause icon' : 'play icon'}
                    className="start-btn"
                    src={
                      isStarted
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    }
                  />

                  <p className="btn-text">{isStarted ? 'Pause' : 'Start'}</p>
                </button>
              </div>
              <div className="btn-c">
                <button type="button" onClick={this.onReset}>
                  <img
                    alt="reset icon"
                    className="start-btn"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  />
                  <p className="btn-text">Reset</p>
                </button>
              </div>
            </div>
            <div className="timer-limit-container">
              <p>Set Timer limit</p>
              <div className="set-limit">
                <button type="button" onClick={this.onDecrement}>
                  -
                </button>
                <p className="span-style">{mini}</p>
                <button type="button" onClick={this.onIncrement}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
