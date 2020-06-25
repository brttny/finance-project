import React, { Component } from 'react';
import Layout from "../components/Layout";
import data from "../components/TimeSeriesIntraDailyVariables";
import {
    LineChart,
    XAxis,
    CartesianGrid,
    Line,
    Tooltip,
    YAxis,
    Label, Legend
} from 'recharts';

const TimeSeriesGraph2 = () => {
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
                <h2>Analyze Stock Data In Real Time.</h2>
                <div>
                    <fieldset>
                        <legend>View today's volume of trade for a global equity, updated every minute.</legend>
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
                </div>
                <p>{message}</p>
                <br />
                <h3>Equity Selected: {responseData ? responseData.symbol : ''}</h3>
                <p>Intra-Daily Time Series with Splits and Dividend Events</p>
                <small>Last Refresh: {responseData ? responseData.refreshed : ''}</small>

                <LineChart
                    width={900}
                    height={500}
                    data={responseData.volume}
                    margin={{ top: 50, right: 20, left: 20, bottom: 50 }}>
                    <YAxis
                        yAxisId="left"
                        tickCount={10}
                        type="number"
                        width={80}>
                        {/*<Label value="Number Of Trades" position="insideBottomLeft" angle={270} />*/}
                    </YAxis>
                    <Line yAxisId="left" type="monotone" dataKey="volume" stroke="#5a83c7" />
                    <XAxis
                        padding={{left: 5, right: 5}}
                        tickCount={10}
                        angle={-60}
                        height={90}
                        dataKey="date"
                        tick={false}>
                        <Label value="Date" position="insideRight" />
                    </XAxis>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
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

    legend {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    }
    
    label {
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
export default TimeSeriesGraph2;