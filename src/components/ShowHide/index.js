import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstname = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastname = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="conatiner">
        <h1>ShowHide</h1>
        <div>
          <button type="button" className="button" onClick={this.firstname}>
            Show/hideFirstName
          </button>
          {firstName && <p className="name">siri</p>}

          <button type="button" className="button" onClick={this.lastname}>
            Show/hideLastName
          </button>
          {lastName && <p className="name">chandu</p>}
        </div>
      </div>
    )
  }
}
export default ShowHide
