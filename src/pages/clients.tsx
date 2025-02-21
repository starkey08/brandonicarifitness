// components/clients.tsx
import Card from '../components/ClientCard'
import React from "react";
const Clients: React.FC = () => {
    const handleClick = (id:number) => {
        console.log(id);
    };

    return (
        <div>
            <h1>Welcome to the Clients Page</h1>
            {/* Add content for the home page */}

            <div className="row">
                <Card id={1} clientName="Brandon Jones" injuries="Right Arm" goals="Balanced strength" favoriteQuote="42" startDate="8/26/1977" onClick={handleClick}></Card>
                <Card id={2} clientName="Veronica Jones" injuries="Inflated Ego" goals="Rule the world" favoriteQuote="Brandon, that's gross!" startDate="1/1/2026" onClick={handleClick}></Card>
            </div>
        </div>
    );
};

export default Clients;

//date started
//injuries
//goals
