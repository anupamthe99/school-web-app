import React, { useState, useEffect } from 'react'

const Form = (props) => {

    const [name, setName] = useState("")
    const [discription, setDisc] = useState("")
    const [img_school_link, setImg] = useState(null)
    const [conatact_no, setContact] = useState("")

    function add_school() {
        let id = props.add
        let data = { id, name, discription, img_school_link, conatact_no };
        fetch("http://127.0.0.1:8000/school/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then((result) => {
                console.warn("result", result)
                console.log(resp.status)
                {resp.status===201 ? alert("school is added"):alert("failed to add school")}
            })
        })
    }

    return (
        <>
            {props.add > 1 ? (
                <div className='container' style={{backgroudcolor:'#cfd9df',height:'100vh'}}>

                    <h2>Add a School :</h2>
                    <label className="form-label" htmlFor="name">Name :</label>
                    <input className="form-control" type="text" id='name' onChange={(e) => setName(e.target.value)} />

                    <label className="form-label" htmlFor="img">ImageSchool :</label>
                    <input className="form-control" type="text" id='img' onChange={(e) => {
                        setImg(e.target.value)
                    }} />

                    <label className="form-label" htmlFor="disc">Discription :</label>
                    <input className="form-control" type="text" id='disc' onChange={(e) => setDisc(e.target.value)} />

                    <label className="form-label" htmlFor="contact">Contact Info :</label>
                    <input className="form-control" type="text" id='contact' onChange={(e) => setContact(e.target.value)} />

                    <button className='btn btn-success mt-2' onClick={add_school}>Add Schools</button>
                </div>
            ) : null}
        </>
    )
}

export default Form