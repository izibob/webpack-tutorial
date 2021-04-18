import React from 'react'
import $ from 'jquery'

class App extends React.Component {
  componentDidMount() {
    $('<h1/>')
      .text('Is this JQuery')
      .css({textAlign: 'center'})
      .appendTo('header')
  }


  render() {
    return (
      <React.Fragment>
        <header></header>
        <hr/>
        <div className={"box"}>
          <h2 className={"box-title"}>Box Title</h2>
          <p className={"box-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet error, molestiae
            molestias mollitia nam nobis perferendis placeat repellat rerum ut?</p>
        </div>
      </React.Fragment>
    )
  }

}

export {
  App
}

