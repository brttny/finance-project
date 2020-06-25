import React from "react";

class CryptocurrencyPrices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        let list = '';

        if(this.state.currency === 'USD') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.USD.description}
                : <span className="badge badge-primary">{this.props.bpi.USD.code}
                   </span> <strong>{this.props.bpi.USD.rate}</strong></li>
        } else if(this.state.currency === 'GBP') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.GBP.description}
                : <span className="badge badge-primary">{this.props.bpi.GBP.code}
                   </span> <strong>{this.props.bpi.GBP.rate}</strong></li>
        } else if(this.state.currency === 'EUR') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.EUR.description}
                : <span className="badge badge-primary">{this.props.bpi.EUR.code}
                   </span> <strong>{this.props.bpi.EUR.rate}</strong></li>
        }
        return(
            <div>
                <h5>Select a desired currency below.</h5>
                    <label htmlFor="list-group" className="subheader">The default currency is set to USD.</label>
                    {/*<select onChange={e => this.setState({currency: e.target.value})} className="form-control">*/}
                    <select className="form-control" onChange={e => this.setState({currency: e.target.value})} id="exampleSelect1">
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                <br />
                <ul className="list-group">
                    {list}
                </ul>
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

    .subheader {
    display: flex;
    justify-content: center;
    align-items: center;
    align-text: center;
    font-size: 0.875rem;
    line-height: 1.5;
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
        );
    }
}

export default CryptocurrencyPrices;