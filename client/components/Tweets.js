import React, { Component } from 'react';
import Tweet from './Tweet';

class Tweets extends Component {
  constructor(props) {
    super(props);

    this.state = { tweets: [] };
    this.tweet = this.tweet.bind(this);
    // No need to bind displayTweets() because it is called inside of the render
  }

  componentDidMount() {
    $.ajax({
      url: '/api/home_timeline',
      type: 'GET',
      dataType: 'JSON'
    }).done( tweets => {
      this.setState({ tweets });
    }).fail( data => {
      console.log(data);
    });
  }

  tweet(e) {
    e.preventDefault();
    // Figure out how to send a tweet to the API

    $.ajax({
      url: '/api/tweet',
      type: 'POST',
      dataType: 'JSON',
      data: { message: this.refs.message.value }
    }).done( tweet => {
      // needs to reset state and add the new tweet to it
      this.refs.tweetForm.reset();
      this.setState({ tweets: [tweet, ...this.state.tweets] });
    }).fail( data => {
      console.log(data);
    });
  }

  displayTweets() {
    //Figure out for to grab home timeline tweets and display them
    let tweets = this.state.tweets;

    if(tweets.length) {
      return tweets.map( tweet => {
        return(<Tweet key={tweet.id} tweet={tweet} />);
      });
    } else {
      return(<h3>No Home Timeline Tweets</h3>)
    }
  }

  render() {
    return(
      <div>
        <h3>All Tweets</h3>
        <hr />
        <form ref='tweetForm' onSubmit={this.tweet}>
          <textarea className='form-control' ref='message' placeholder='Your Tweet Here!' required></textarea>
          <input type='submit' className='btn btn-success' value='Send Tweet' />
        </form>
        <hr />
        { this.displayTweets() }
      </div>
    );
  }
}

export default Tweets;
