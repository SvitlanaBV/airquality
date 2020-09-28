import React from 'react';
import './SectorsList.scss';
import SectorsItem from "./SectorsItem";

const SectorsList = ({title, subtitle, items}) => {
    const itemsList = items.map((sector, i) => <SectorsItem sector={sector} number={i+1} key={i}/>);

    return (
        <section className="sectors container">
            <h2 className="sectors-title" id="police">
                {title}
            </h2>
            <p className="sectors-subtitle">
                {subtitle}
            </p>
            <div className="sectors-list">
                {itemsList}
            </div>
        </section>
    );
};

export default SectorsList;