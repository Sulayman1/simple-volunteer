import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activiti from './activiti/Activiti';
import './Main.css';
const Main = () => {
    // const [volunteers, setVolunteers] = useVolunteers();
    const [searchResult, setsearchResult] = useState([]);
    const [searchText, setsearchText] = useState('');

    useEffect(() => {
        console.log('inside use effect')
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText));
                setsearchResult(match);
            })
    }, [searchText])

    const handleSearchChange = event => {
        setsearchText(event.target.value);

    }
    // const handleSearchChange2 = event => {
    //     const searchText = event.target.value;
    //     const match = volunteers.filter(v => v.title.includes(searchText));
    //     setsearchResult(match);
    // }

    return (
        <div>
            <div>
                <input onChange={handleSearchChange} type="text" placeholder='scarch' />
            </div>
            <div className='activity-container'>
                {
                    searchResult.map(activity => <Activiti
                        key={activity.taskId}
                        activity={activity}></Activiti>)
                }
            </div>
        </div>

    );
};

export default Main;