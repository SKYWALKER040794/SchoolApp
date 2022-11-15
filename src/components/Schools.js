import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import School from './School.js';

function Schools() {

    const navigate = useNavigate();
    
    const schools = [
        {id:'1', name:  'Beaconhouse', location: 'New York' },
        {id:'2', name: 'Bloomfield', location: 'Boston' }
    ]

    const [schoolList, setSchoolList] = useState();

    useEffect(()=>{
        let getSchools = localStorage.getItem('schools');
        if(getSchools && JSON.parse(getSchools.length > 0)){
            console.log('get ', getSchools)
            setSchoolList(JSON.parse(getSchools));
        }
        else{
            setSchoolList(schools);
            localStorage.setItem('schools', JSON.stringify(schools))
        }
    },[])

    return (<div>
        <button onClick={()=>navigate('/add')} className='addBtn'>Add New School</button>
        {schoolList && schoolList.map((school) => 
            <School 
                school        = {school}
                setSchoolList = {setSchoolList}
                schoolList    = {schoolList}
            />
        )}       
    </div>)
}

export default Schools;