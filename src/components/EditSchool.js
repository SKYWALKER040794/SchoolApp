import axios from 'axios';
import React, {useState} from 'react'

import {useLocation , useNavigate} from 'react-router-dom'

import './css/School.css'
import { finalService } from './Requests';

export default function EditSchool() {

    const {state} = useLocation();
    const navigate = useNavigate();

    const [name, setName]         = useState(state?.name || "");
    const [level, setLevel]       = useState(state?.level || "");
    const [location, setLocation] = useState(state?.location || "");
    const [error, setError]       = useState(false);
    const [loader,setLoader]      = useState(false);
    
    const handleEditFunc = async(e) =>{
        e.preventDefault();
        setLoader(true);
        if(name == "" || level == "" || location == ""){
            setError(true)
            return
        }

        let payload = {
            name : name, 
            level: level,
            location: location,
        }

        const deleteEntity =  await finalService['put'](payload, state.id)

        if(deleteEntity.data.isSuccessful){
            setLoader(false);
        }
        navigate('/')
    }

    const handleCreateFunc = async(e) =>{
        e.preventDefault();
        setLoader(true);
        if(name == "" || level == "" || location == ""){
            setError(true)
            return
        }
        
        let payload = {
            name : name, 
            level: level,
            location: location,
        }
        
        
        const deleteEntity =  await finalService['post'](payload)

        if(deleteEntity.data.isSuccessful){
            setLoader(false);
        }
        navigate('/')
    }

    return (
        <div className='editSchool'>   
            <h1>{state ? 'Edit School' : 'Add New School'}</h1>
            <form className='editForm'>
            <div className='label'> 
                Level
            </div>
            <input required onChange={(e)=>setLevel(e.target.value)} value={level} />
            <div className='label'>
                Name
            </div>
            <input required onChange={(e)=>setName(e.target.value)} value={name}/>
            <div className='label'> 
                Location
            </div>
            <input required onChange={(e)=>setLocation(e.target.value)} value={location}/>
            {error && <div className='error'>Please fill all the fields</div>}
            <div className="bottomButtons">
                <button onClick={()=>navigate('/')} className='btn back cp'>Back</button>
                <button style={{display : 'flex'}} onClick={(e)=>{state ? handleEditFunc(e) : handleCreateFunc(e)}} className='btn edit cp'>{loader && <div className='editLoader'></div>}{state ? 'Save' : 'Create'}</button>
            </div>
            </form>
        </div>
  )
}
