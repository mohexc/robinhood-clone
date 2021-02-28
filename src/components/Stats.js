import { Card, notification } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import StatsRow from './StatsRow'

const TOKEN = process.env.REACT_APP_API_KEY

const Stats = () => {
  const [stocksData, setStocksData] = useState([])
  const [myStocks, setMyStocks] = useState([])

  useEffect(() => {
    fetchStockData()
  }, [])
  useEffect(() => {
    if (stocksData.length > 0) {
      console.log(stocksData)
    }
  }, [stocksData])

  const fetchStockData = async () => {
    try {
      const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"]
      const tempStockData = await Promise.all(stocksList.map(async (stock) => {
        try {
          const { data } = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=${TOKEN}`)
          return { name: stock, ...data }
        } catch (error) {
          const messageError = error.response ? error.response.data.error : error.message
          notification.error({ description: messageError })
        }

      }))
      setStocksData(tempStockData)

    } catch (error) {
      const messageError = error.response ? error.response.data.error : error.message
      notification.error({ description: messageError })
    }
  }
  const fetchMyStocks = async () => {

  }


  return (
    <Card>
      <h3 style={{ borderBottom: "1px solid black" }}>Stock</h3>
      {/* ListPrice */}
      {stocksData.map((stock) => (
        <StatsRow
          key={stock.name}
          name={stock.name}
          openPrice={stock.o}
          price={stock.c}
        />
      ))}
    </Card>
  )
}

export default Stats
