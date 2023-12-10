// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {time: 25 * 60, isStarted: false}

  onStart = () => {
    const timerID = setInterval(this.timestarts, 1000)
  }

  timestarts = () => {
    this.setState(prevState => ({time: prevState.time - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => {
      const {time} = prevState
      return {time: time + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      const {time} = prevState
      if (time > Math.floor(time / 60)) {
        return {time: time - 1}
      }
      return {time}
    })
  }

  onHandlePlay = () => {
    this.setState(prevState => {
      const {isStarted} = prevState
      return {isStarted: !isStarted}
    })
  }

  render() {
    const {time, isStarted} = this.state
    let min = Math.floor(time / 60)
    let sec = time % 60
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    return (
      <div className="bg">
        <h1>Digital timer</h1>
        <div className="timer-card">
          <div className="running-timer">
            <div className="circle">
              <p className="time">
                {min}:{sec}
              </p>
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
                </button>
                <p className="btn-text">{isStarted ? 'Pause' : 'Start'}</p>
              </div>
              <div className="btn-c">
                <button type="button" onClick={this}>
                  <img
                    alt="reset icon"
                    className="start-btn"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  />
                </button>
                <p className="btn-text">Reset</p>
              </div>
            </div>
            <div className="timer-limit-container">
              <p>Set Timer limit</p>
              <div className="set-limit">
                <p onClick={this.onDecrement}>-</p>
                <p className="span-style">{(25 * 60) / 60}</p>

                <p onClick={this.onIncrement}>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
