import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navigation</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
         <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/index"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/stock-percentchange"><a className="nav-link">Stock Market - Daily Price Changes</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/stock-timeseries-openclose"><a className="nav-link">Stock Market- Open & Close Prices</a></Link>
                </li>
             <li className="nav-item">
                 <Link href="/stock-timeseries-tradevolume"><a className="nav-link">Stock Market - Volume of Trades</a></Link>
             </li>
                <li className="nav-item">
                    <Link href="/cryptocurrency"><a className="nav-link">Cryptocurrency Rates</a></Link>
                </li>
            </ul>
    </nav>
);

export default Navbar;