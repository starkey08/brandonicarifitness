import React from "react";

interface Props {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Card( {onClick, title, subtitle, description}: Props) {
    return (
        <div className="column">
            <div className="card" onClick={onClick}>
                <h1 className="title-position title" >{title}</h1>
                <h2 className="subtitle-position subtitle">{subtitle}</h2>
                <p className="description-position description">{description}</p>
            </div>
        </div>
    );
}

// export const Card = ({title, subtitle, description}: Props) => {
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