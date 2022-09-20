import React from 'react'
import {Link} from 'react-router-dom'

const School = (props) => {

    const add_school=(school)=>{
        props.add_school(school)
        console.log(school)
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center mb-4 p-2">
            <h2 className='text-center me-2'>Search Best school in Nepal :</h2>
            <button className="btn btn-sm btn-success p-1 h4" onClick={() => add_school(props.schools.length)}>
                <Link className="text-decoration-none text-white" to='add'>Add Schools</Link>
                
                </button>
            </div>

            <div className='row'>


           
            <div className="school_list row d-flex justify-content-center align-items-center">
            
                {props.schools.map(school_name => {
                    return (
                        <>
                            <div className="schools col-lg-5 col-sm-12">
                                <div className={school_name.name}>
                                    <h2>{school_name.name}</h2>
                                    <img src={school_name.img_school_link} alt="" height={200} width={200} />
                                    <p>
                                        About School :
                                        {school_name.discription}
                                    </p>
                                    
                                  <button className='btn btn-success'><Link className='text-decoration-none text-white' to={`school/${school_name.id}`}>View More:</Link></button>
                                </div>
                            </div>
                            {/* Id name : {id} */}
                        </>
                    )
                })}
            </div>
            </div>
        </div>
    );
}


export default School;