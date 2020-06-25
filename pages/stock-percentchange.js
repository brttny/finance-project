import React, { Component } from 'react';
import Layout from "../components/Layout";
import data from "../components/TimeSeriesIntraDailyVariables";

const TimeSeriesGraph = () => {
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
                            <legend>View a global equity's variable price change from yesterday.</legend>
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
                {/*<p>Intra-Daily Time Series with Splits and Dividend Events</p>*/}
                <small>Last Refresh: {responseData ? responseData.refreshed : ''}</small>
                <br />
                <div className="card border-dark mb-3">
                    <div className="card-header">Yesterday's Close Price</div>
                    <h4 className="card-title">{responseData ? responseData.prettyClosePrice : ''}</h4>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">Today's Open Price</div>
                    <h4 className="card-title">{responseData ? responseData.prettyOpenPrice : ''}</h4>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">Today's Price Change</div>
                    {/*{{responseData ? responseData.prettyPercentOpenClosePriceChange : ''} > 0 ? (*/}
                    {/*    <h4 className="card-title" style={ backgroundColor: green }>{responseData ? responseData.prettyPercentOpenClosePriceChange : ''}</h4>*/}
                    {/*) : (*/}
                    {/*    <h4 className="card-title" style={ backgroundColor: red }>{responseData ? responseData.prettyPercentOpenClosePriceChange : ''}</h4>*/}
                    {/*)}*/}
                    {/*if {responseData ? responseData.prettyPercentOpenClosePriceChange : ''} > 0,*/}
                    <h4 className="card-title">{responseData ? responseData.prettyPercentOpenClosePriceChange : ''}</h4>
                    {/*else*/}
                    {/*<h4 className="card-title" style={ backgroundColor: red }>{responseData ? responseData.prettyPercentOpenClosePriceChange : ''}</h4>*/}
                </div>
                <br />
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
    
    h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    margin: 15px;
    }
    
    .form {
    display: flex;
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
    
    .card border-dark mb-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    max-width: 160px;
    }
    
    label {
    display: flex;
    flex-direction: column;
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
    
    .card-header {
    align-items: center;
    text-align: center;
    }
    `}
                </style>
            </div>
        </Layout>
    )
}
export default TimeSeriesGraph;