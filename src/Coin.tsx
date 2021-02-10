import React from 'react'
import './Coin.css'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap, high, low }: any) => {
  return (
    
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">€ {price.toLocaleString()}</p>
          <p className="coin-volume">{volume.toLocaleString()}</p>
           {priceChange < 0 ? (
             <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
           ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
          }
          <p className="coin-marketcap">
            Market Cap: $ {marketcap.toLocaleString()}
          </p>
          <br></br>
          <div className="coin-high-low">
          <p>High 24h: €{high.toLocaleString()}</p>
          <p>Low 24h: €{low.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
