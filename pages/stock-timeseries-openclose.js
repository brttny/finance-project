import React, { Component } from 'react';
import Layout from "../components/Layout";
import data from "../components/TimeSeriesDailyVariables";
import {
    LineChart,
    XAxis,
    CartesianGrid,
    Line,
    Tooltip,
    YAxis,
    Label, Legend
} from 'recharts';

const TimeSeriesGraph3 = () => {
    // Use the state hook to create state variables
    let [responseData, setResponseData] = React.useState('')
    let [equity, setEquity] = React.useState('')
    let [message, setMessage] = React.useState('')
    // Fetch stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()
        setMessage('Loading...')
        data.stockTimeSeries(equity)
            .then((response)=>{
                setResponseData(response.data)
                setMessage('')
                console.log(response)
            })
            .catch((error) => {
                setMessage('Error. Please enter a valid global equity.')
                console.log(error)
            })
    }
    return (
        <Layout>
            <div className="container">
                <h2>Analyze Stock Trends Daily.</h2>

                    <fieldset>
                        <legend>View a global equity's trend of open and close prices for the year.</legend>
                        <br />
                        <h5>Enter a global equity below.</h5>
                        <label htmlFor="equity">Need help choosing an equity? We suggest you start with SPY or IBM!</label>
                        <br />
                    </fieldset>
                    <form className="form" onSubmit={fetchData}>
                        <textarea className="form"
                            // style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flex: 1 }}
                                  required
                                  name="equity"
                                  id="equity"
                                  type='text'
                                  rows="1"
                                  placeholder='SPY'
                                  value={equity}
                                  onChange={(e) => setEquity(e.target.value)}/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                <p>{message}</p>
                <br />
                <h3>Equity Selected: {responseData ? responseData.symbol : ''}</h3>
                <p>Daily Time Series with Splits and Dividend Events</p>
                <small>Last Refresh: {responseData ? responseData.refreshed : ''}</small>
                <LineChart
                    data={responseData.openAndClosePrices}
                    width={750}
                    height={400}
                    margin={{ left: -10, right: 10 }}
                >
                    <CartesianGrid strokeDasharray="5 5"/>
                    <XAxis dataKey="date"/>
                    <Label value="Date" position="centerBottom" />
                    <YAxis yAxisId="left" />
                    <Label position="insideLeft" value="Close Prices" />
                    <YAxis yAxisId="right" orientation="right" domain={[40, 180]}/>
                    <Label position="insideRight" value="Open Prices" />
                    <Tooltip/>
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="close" stroke="#eb3131" dot={false} strokeWidth="3px" />
                    <Line yAxisId="right" type="monotone" dataKey="open" stroke="#5a83c7" dot={false} strokeWidth="3px" />
                </LineChart>
                <style jsx>{`
    .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    
    h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    
    h5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    
    .form {
    display: flex;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    
    button {
    height: 30px;
    text-align: center;
    padding: 0px 24px 0px 24px;
    margin: 5px;
    }
    
    label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    
    legend {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    `}
                </style>
            </div>
        </Layout>
    )
}
export default TimeSeriesGraph3;