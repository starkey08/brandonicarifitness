// components/clients.tsx

import React from "react";
import {useParams} from "react-router-dom";
const ClientDetail: React.FC = () => {
    const { clientId } = useParams();
    return (
        <div>
            <h1>Welcome to the Client Detail Page</h1>
            <h2>ClientId: {clientId}</h2>
            {/* Call to get the client detail */}

        </div>
    );
};

export default ClientDetail;

//date started
//injuries
//goals
