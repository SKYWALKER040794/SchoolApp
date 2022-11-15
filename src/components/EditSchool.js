import React, {useState} from 'react'

import {useLocation , useNavigate} from 'react-router-dom'

import './css/School.css'

export default function EditSchool() {

    const {state} = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState(state?.name || "");
    const [id, setId] = useState(state?.id || "");
    const [location, setLocation] = useState(state?.location || "");
    const [error, setError] = useState(false);
    
    const handleEditFunc = (e) =>{
        e.preventDefault();
        if(name == "" || id == "" || location == ""){
            setError(true)
            return
        }
        let schools = JSON.parse(localStorage.getItem('schools'));
        schools.forEach((school)=>{
            if(school.id == state.id){
                school.name = name;
                school.id = id;
                school.location = location;
            }
        })
        localStorage.setItem('schools', JSON.stringify(schools) )
        navigate('/')
    }

    const handleCreateFunc = () =>{
        if(name == "" || id == "" || location == ""){
            setError(true)
            return
        }
        let newSchool = {
            id : id,
            name: name, 
            location: location,
        }
        
        let schools = localStorage.getItem('schools');
        if(schools && JSON.parse(schools).length > 0){
            let allSchools = JSON.parse(schools);
            allSchools.push(newSchool);
            localStorage.setItem('schools', JSON.stringify(allSchools))
        }
        else{
            let allSchools = []
            allSchools.push(newSchool);
            localStorage.setItem('schools', JSON.stringify(allSchools))
        }
        navigate('/')
    }

    return (
        <div className='editSchool'>   
            <h1>{state ? 'Edit School' : 'Add New School'}</h1>
            <form className='editForm'>
            <div className='label'> 
                Id
            </div>
            <input required onChange={(e)=>setId(e.target.value)} value={id} />
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
                <button onClick={(e)=>{state ? handleEditFunc(e) : handleCreateFunc(e)}} className='btn edit cp'>Save</button>
            </div>
            </form>
        </div>
  )
}
