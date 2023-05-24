/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {appItem: 0}

  onChangeRight = () => {
    const {reviewsList} = this.props
    this.setState(prevState =>
      prevState.appItem < reviewsList.length - 1
        ? {appItem: prevState.appItem + 1}
        : '',
    )
  }

  onChangeLeft = () => {
    this.setState(prevState =>
      prevState.appItem > 0 ? {appItem: prevState.appItem - 1} : '',
    )
  }

  render() {
    const {appItem} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[appItem]
    return (
      <div className="divContainer">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="headContainer">
          <button
            data-testid="leftArrow"
            className="button"
            onClick={this.onChangeLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="para">{username}</p>
          <button
            data-testid="rightArrow"
            className="button"
            onClick={this.onChangeRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="com">{companyName}</p>
        <p className="com">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
