import React, {Component} from 'react'
var Remarkable = require('remarkable');

class Idea extends Component {

  handleClick = () => {
    this.props.onClick(this.props.idea.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.idea.id)
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.props.idea.body)};
  }

  render () {

    return(
      <center>
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>x</span>
        <h4 onClick={this.handleClick}>{this.props.idea.title}</h4>
        <p 
          onClick={this.handleClick} 
          dangerouslySetInnerHTML={this.getRawMarkup()}
        ></p>
      </div>
      </center>
    )
  }
}

export default Idea
