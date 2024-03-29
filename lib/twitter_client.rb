class TwitterClient
  def self.home_timeline
    client.home_timeline
  end

  def self.tweet(message)
    client.update(message)
  end

  def self.user_timeline(user)
    client.user_timeline(user)
  end

  private
    def self.client
      Twitter::REST::Client.new do |config|
        config.consumer_key        = ENV['TWITTER_CONSUMER_KEY']
        config.consumer_secret     = ENV['TWITTER_CONSUMER_SECRET']
        config.access_token        = ENV['TWITTER_ACCESS_TOKEN']
        config.access_token_secret = ENV['TWITTER_ACCESS_SECRET']
      end
    end
end
