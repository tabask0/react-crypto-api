import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './Coin'


const App = () => {

  const [coins, setCoins] = useState<any[]>([])
  const [search, setSearch] = useState('')

 useEffect(() => {
   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   .then(res => {
     setCoins(res.data)
   })
   .catch(error => console.log("There is an " + error))
 }, []);

 const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
   setSearch(e.target.value)
 }

 const filteredCoins = coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Crypto finder with CoinGecko API by Andrei Bucur @ <a href="https://codiver.ro">Codiver</a></h1>
        <form>
          <input type="text" className="coin-input" placeholder="Search" 
          onChange={handleChange}/>
        </form>
      </div>
      <div className="currencies">
      <p className="currency-name">Currency</p>
      <p className="currency-price">Price</p>
      <p className="currency-volume">Volume</p>
      <p className="currency-change">Change</p>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          high={coin.high_24h}
          low={coin.low_24h}/>
      )})}
    </div>
  );
}

export default App;
