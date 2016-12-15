import React from 'react';

const Tweet = ({ tweet }) => (
  <div style={styles.well} className='well well-sm col-sm-12 col-md-6'>
    <img src={tweet.user.profile_image_url} />
    <br />
    <i><strong> Author: </strong>{tweet.user.name} </i>
    <br />
    <i><strong>Author Location:</strong> {tweet.user.location} </i>
    <br />
    <blockquote>
      {tweet.text}
    </blockquote>
    <i><strong> Favorites:</strong> {tweet.favorite_count} </i>
    <br />
    <i><strong>Retweet Count:</strong> {tweet.retweet_count} </i>
  </div>
)

const styles = {
  well: {
    height: '300px'
  }
}

export default Tweet;
