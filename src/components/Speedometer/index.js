// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(n => ({speed: n.speed + 10}))
    }
  }

  Break = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(n => ({speed: n.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main">
        <h1 className="t1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="Speedometer"
        />
        <h1 className="t1">
          Speed is <span>{speed}</span>mph
        </h1>
        <p className="t2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn1" type="button" onClick={this.Accelerate}>
            Accelerate
          </button>
          <button className="btn2" type="button" onClick={this.Break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
