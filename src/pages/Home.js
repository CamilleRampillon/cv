import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Camille Rampillon</h1>
                    <h2>Développeuse web</h2>
                    <div className="pdf">
                        <a href="./media/cvdev.pdf" target="_blank"> Télécharger le cv</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;