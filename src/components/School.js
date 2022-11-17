import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import './css/School.css';

import { finalService } from './Requests';

function School(props){
    
    const navigate = useNavigate();
    const [deleteLoader, setDeleteLoader] = useState(false);


    const handleDeleteFunc = async() =>{
        setDeleteLoader(true)
        
        const deleteEntity =  await finalService['delete'](props.school.id)

        if(deleteEntity.data.isSuccessful){
            props.setHandleRefresh(true);
        }
        setDeleteLoader(false)

    }

    const handleEditFunc = () => {
        navigate(`/edit/${props.school.id}`, {state : props.school})
    }   

    return(
        <div className='school'>
            <div className='Level'><span><strong>Level: </strong></span>{props.school.level}</div>
            <p className='schoolLocation'><strong>Location: </strong>{props.school.location}</p>
            <p className='schoolName'>This is <b style={{textTransform: 'capitalize'}}>{props.school.name}</b> School.</p>
            <div style={{display : 'flex', justifyContent : 'center'}}>
                <button onClick={handleDeleteFunc} className='btn del cp'>{deleteLoader && <div className='btnLoader'></div>}Delete</button>
                <button onClick={handleEditFunc} className='btn edit cp'>Edit</button>
            </div>
        </div>
    )
}

export default School; 
