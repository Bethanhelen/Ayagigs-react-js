import "./app.css";
import hero from './hero.jpg';
import base from './assets/images/bg.jpg';

function App() {
    return ( 
        <div className = "App" >
            <header>
                <div className="content-left">
                    <h1>BETFTs</h1>
                </div>
                <div className="content-right">
                    <a href="#">Home</a>
                    <a href="#">Explore</a>
                    <a href="#">Marketplace</a>
                    <a className='sign' href="#">Sign-up</a>
                </div>
            </header>

            <div className="hero">
                <div className="hero-left">
                    <h2>Discover, Collect & Sell Popular Nfts</h2>
                    <p>The world biggest collection of crypto collectible & Non-fungible token</p>
                    <a className='sign' href="#">Create Nfts</a>
                </div>
                <div className="hero-right">
                    <img src= {hero} className="hero-image" alt="hero-image" />
                </div>
        
            </div>
        </div>
    );
}

export default App;