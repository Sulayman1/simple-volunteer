import React from 'react';
import './activiti.css';

const Activiti = ({ activity }) => {
    const { title, img } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h2 style={{ color: "goldenrod" }}>{title}</h2>
        </div>
    );
};

export default Activiti;