import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import School from './School.js';

import axios from 'axios';
import './css/School.css'

function Schools() {

    const navigate = useNavigate();
    

    const [schoolList, setSchoolList]       = useState([]);
    const [loader, setLoader]               = useState(true);
    const [handleRefresh, setHandleRefresh] = useState(false);


    const onLoadFunc = async()=>{
        setLoader(true);
        let payload = {
            "email": "paulhorn707@gmail.com",
            "password": "Guitarphone6951!",
            "tenantId": "bootCamp1"
          }
        const register = await axios.post('https://api.remotebootcamp.dev/api/users/login', payload)
 
        console.log('register ', register)

        let data = await axios.get('https://api.remotebootcamp.dev/api/entities/schools', { withCredentials: true });

        console.log('data ', data.data.items);
        if(data.data.isSuccessful){
            setSchoolList(data.data.items)
        }

        setLoader(false);


    }

    useEffect(()=>{
        onLoadFunc();
    },[handleRefresh])


    return (
       <div>
        <button onClick={()=>navigate('/add')} className='addBtn'>Add New School</button>
            {!loader ?
                schoolList && schoolList.length > 0 ? schoolList.map((school) => 
                    <School 
                        school           = {school}
                        setSchoolList    = {setSchoolList}
                        schoolList       = {schoolList}
                        setHandleRefresh = {setHandleRefresh}
                    />
                )

                :

                <div>You need to add some Schools!</div>
            :

            <div className="loaderSection">
                <div className='loader'></div>
                <div style={{marginTop: 16}}>Loading...</div>
            </div>
            
            }       
        </div>
    )
}

export default Schools;