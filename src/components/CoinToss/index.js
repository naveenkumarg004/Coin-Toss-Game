import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headCount: 0, tailsCount: 0, isHead: true}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        isHead: false,
      }))
    }
    // console.log(tossResult)
  }

  render() {
    const {headCount, tailsCount, isHead} = this.state

    const tossImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg">
        <div className="content-div">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="toss-image" alt="toss result" src={tossImage} />
          <button type="button" className="toss-btn" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="count-cont">
            <p className="count-text">Total: {headCount + tailsCount}</p>
            <p className="count-text">Heads: {headCount}</p>
            <p className="count-text">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
