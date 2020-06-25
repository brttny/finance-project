import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <div className="container">
                <main>
                    <div className="jumbotron">
                        <h1 className="">Welcome to the simplest & most effective way to track realtime financial
                            data.</h1>
                        <hr className="my-4"></hr>
                            <p>Get started with Navigation.</p>
                            <p className="lead"></p>
                    </div>
                    </main>
                <style jsx>{`
    .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `}
                </style>
            </div>
        </Layout>
    )
}
require('events').EventEmitter.prototype._maxListeners = 100;


export default Home