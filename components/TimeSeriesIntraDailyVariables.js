import React from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://alpha-vantage.p.rapidapi.com',
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': '1d172e189cmshe8799bf1f91152bp1702fejsn5eeaa1cb9bd8'
    }
});

export default {
    stockTimeSeries: (symbol) =>
        instance({
            'method':'GET',
            'url':'/query',
            'params': {
                'outputsize':'compact',
                'datatype':'json',
                'function':'TIME_SERIES_INTRADAY',
                'interval': '1min',
                'symbol': symbol.toUpperCase()
            },
            transformResponse: [function (data) {
                console.log('Transforming data...')

                const json = JSON.parse(data)

                const dates = Object.keys(json['Time Series (1min)']).reverse()

                const closePrices = dates.map(date => date = {
                    date,
                    close: Number(json['Time Series (1min)'][date]['4. close'])
                })

                const openPrices = dates.map(date => date = {
                    date,
                    open: Number(json['Time Series (1min)'][date]['1. open'])
                })

                const highPrices = dates.map(date => date = {
                    date,
                    high: Number(json['Time Series (1min)'][date]['2. high'])
                })

                const lowPrices = dates.map(date => date = {
                    date,
                    low: Number(json['Time Series (1min)'][date]['3. low'])
                })

                const volume = dates.map(date => date = {
                    date,
                    volume: Number(json['Time Series (1min)'][date]['5. volume'])
                })

                const openAndClosePrices = dates.map(date => date = {
                    date,
                    open: Number(json['Time Series (1min)'][date]['1. open']),
                    close: Number(json['Time Series (1min)'][date]['4. close'])
                })

                //Creating these variables to show % change & isolate first values
                const percentOpenClosePriceChange = openAndClosePrices.map(function(item) {
                    return (((item.open - item.close) / item.open * 1000).toFixed(4) + '%')
                })

               const prettyPercentOpenClosePriceChange = percentOpenClosePriceChange[0];

                const openPriceNoDate = openPrices.map(function(item) {
                    return ('$' + item.open)
                })

                const closePriceNoDate = closePrices.map(function(item) {
                    return ('$' + item.close)
                })

                const prettyOpenPrice = openPriceNoDate[0];

                const prettyClosePrice = closePriceNoDate[0];

                const symbol = json['Meta Data']['2. Symbol']
                const refreshed = json['Meta Data']['3. Last Refreshed']
console.log(volume)
                data = {
                    symbol,
                    refreshed,
                    closePrices,
                    openPrices,
                    highPrices,
                    lowPrices,
                    volume,
                    openAndClosePrices,
                    percentOpenClosePriceChange,
                    prettyPercentOpenClosePriceChange,
                    prettyOpenPrice,
                    prettyClosePrice
                }

                return data;
            }],
        }),
}