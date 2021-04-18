import React from 'react';
import './css/Overview.css';

const Overview = () => {
    return (
        <div className="overview">
            <div className="safe5">
                <h1>5 nejbezpečnějších zemí</h1>
                <p>Zapadákov</p>
                <p>SSSR</p>
                <p>Prusko</p>
                <p>Jugoslávie</p>
                <p>Rakousko-Uhersko</p>
            </div>
            <div className="dangerous5">
                <h1>5 nejnebezpečnějších zemí</h1>
                <p>Amerikaaa</p>
                <p>Akirema</p>
                <p>Kanada</p>
                <p>USA</p>
                <p>Mexiko</p>
            </div>
            <div className="died">
                <h1>počet úmrtí</h1>
                <p>4,328,742</p>
            </div>
            <div className="RNumber">
                <h1>Reprodukční číslo</h1>
                <p>2.354</p>
            </div>
        </div>
    );
}

export default Overview;