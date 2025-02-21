//import React from "react";

interface Props {
    id: number;
    clientName: string;
    startDate: string;
    injuries: string;
    goals: string;
    favoriteQuote: string;
    onClick: (id:number) => void;
}

export default function ClientCard({onClick, id, clientName, startDate, injuries, goals, favoriteQuote}: Props) {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <div className="column">
            <div className="card" onClick={handleClick}>
                <h1 className="title-position title" >{clientName}</h1>
                <h2 className="subtitle-position subtitle">Start Date: {startDate}</h2>
                <p className="description-position description">Injuries: {injuries}</p>
                <p className="description-position description">Goals: {goals}</p>
                <p className="description-position description">Favorite Quote: {favoriteQuote}</p>
            </div>
        </div>
    );
}

// export const ClientCard = ({title, subtitle, description}: Props) => {
//     return (
//         <div className="column">
//             <div className="card" onClick={this.propps.onClick}>
//                 <h1 className="title-position title" >{title}</h1>
//                 <h2 className="subtitle-position subtitle">{subtitle}</h2>
//                 <p className="description-position description">{description}</p>
//             </div>
//         </div>
//     )
// }