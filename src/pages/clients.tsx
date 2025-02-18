// components/clients.tsx
import React, {MouseEventHandler} from 'react';
import Card from '../components/Card'
const Clients: React.FC = () => {
    const handleClick: MouseEventHandler = (event) => {
        console.log('clicked');
        console.log(event);
    };

    return (
        <div>
            <h1>Welcome to the Clients Page</h1>
            {/* Add content for the home page */}

            <div className="row">
                <Card id={1} title="Brandon Jones" description="Brandon's Training Card" subtitle="Just getting fit!" onClick={handleClick}></Card>
                <Card id={2} title="Veronica Jones" description="Veronica's Training Card" subtitle="Workout like a beast!" onClick={handleClick}></Card>
            </div>
        </div>
    );
};

export default Clients;