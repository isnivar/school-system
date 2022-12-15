import React, { useEffect, useState } from 'react';

import {getAllGroups} from '../utils/requests';

export const SelectGroups = () => {

    const [groups, setGroups] = useState([])
    
    useEffect(() => {
        getAllGroups().then((groups)=>{
            setGroups(
                [...groups]
            );
        })
    }, [])

    return (
        <>
            {
                groups.map(groups => <option key={groups.id} value={parseInt(groups.id)}>{groups.grade}{groups.group}</option>)
            }
        </>
    )
}