class Api::TweetsController < ApplicationController
  def home_timeline
    render json: TwitterClient.home_timeline
  end

  def tweet
    render json: TwitterClient.tweet(params[:message])
  end
end
