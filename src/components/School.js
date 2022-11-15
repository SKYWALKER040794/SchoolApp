
import './css/School.css';

import {useNavigate} from 'react-router-dom'

function School(props){
    
    const navigate = useNavigate();

    const handleDeleteFunc = () =>{
        const filterSchools = props.schoolList.filter((school)=>{
            return school.id != props.school.id
        })
        localStorage.setItem('schools', JSON.stringify(filterSchools))
        props.setSchoolList(filterSchools)
    }

    const handleEditFunc = () => {
        navigate(`/edit/${props.school.id}`, {state : props.school})
    }   

    return(
        <div className='school'>
            <div className='schoolId'><span><strong>School ID: </strong></span>{props.school.id}</div>
            <p className='schoolLocation'><strong>Location: </strong>{props.school.location}</p>
            <p className='schoolName'>This is {props.school.name} School.</p>
            <button onClick={handleDeleteFunc} className='btn del cp'>Delete</button>
            <button onClick={handleEditFunc} className='btn edit cp'>Edit</button>
        </div>
    )
}

export default School; 
