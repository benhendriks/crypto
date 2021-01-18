class Currency < ApplicationRecord
    
  apikey = ENV.fetch('COIN_KEY')

  def current_price
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body)
  end 
end
