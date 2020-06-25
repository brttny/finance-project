import Layout from "../components/Layout";
import Fetch from 'isomorphic-unfetch';
import CryptocurrencyPrices from "../components/CryptocurrencyPrices";
import React from "react";

const Cryptocurrency = (props) => (
    <Layout>
        <div className="container">
            <main>
                <h2 className="title">Analyze cryptocurrency (BTC) data in real time.</h2>
                <legend>Compare Bitcoin rates in different markets.</legend>
                <br />
                <legend><CryptocurrencyPrices bpi={props.bpi} /></legend>
            </main>
            <style jsx>{`
    .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
);

Cryptocurrency.getInitialProps = async function() {
    const res = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    };
}

export default Cryptocurrency;