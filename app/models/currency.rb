class Currency < ApplicationRecord

  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end
    
  apikey = ENV.fetch('COIN_KEY')

  def current_price
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey 
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body)[0]['price']
  end 
end
