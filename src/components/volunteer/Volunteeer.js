import React, { useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activiti from '../main/activiti/Activiti';

const Volunteeer = () => {
    const [volunteers, setVolunteers] = useVolunteers();


    return (
        <div>
            <h1>this is volunteer</h1>

            <div className="activity-container">
                {
                    volunteers.map(volunteer => <Activiti
                        key={volunteer.taskId}
                        activity={volunteer}></Activiti>)
                }
            </div>

        </div>
    );
};

export default Volunteeer; 