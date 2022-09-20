import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
const School_discription = () => {

    const [school, setSchool] = useState([])
    
    const {id}=useParams();
    console.log(id)
    useEffect(() => {


        fetch(`http://127.0.0.1:8000/school/${id}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(resp => resp.json())
            .then(resp => setSchool(resp))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="" style={{backgroundcolor:'#cfd9df',height:'100vh'}}>

        
            <div className="schools d-flex flex-row justify-content-center p-2">
                <div>
                    <h2 className='mt-3'>{school.name}</h2>
                    <img src={school.img_school_link} alt="" height={400} width={400} />
                    <p className='h6'>
                        About School :
                        {school.discription}
                    </p>
                    <h5>
                        Contact Number : {school.conatact_no}
                    </h5>

                </div>
            </div>



        </div>

    )
}

export default School_discription