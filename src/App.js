import './App.css';
import School_list from './components/School';
import School_discription from './components/School_discription'
import Form from './components/form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
function App(props) {

  const [schools, setSchools] = useState([])
  const [addschool, setAddschool] = useState(null);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/school/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(resp => setSchools(resp))
      .catch(error => console.log(error))
  }, [])



  const add_school = (school) => {
    setAddschool(school);
  }

  return (
    <div className="App " >
      <Router>
        <Routes>
          <Route path='/' element={<School_list schools={schools} add_school={add_school} />} />
          <Route path='school/:id' element={<School_discription />} />
          {addschool > 1 ? <Route path='add' element={<Form add={addschool} />} /> : null}

        </Routes>
      </Router>

      {/* <School_list schools={schools} add_school={add_school} />
      {addschool ? <Form add={addschool} /> : null} */}

    </div>
  );
}

export default App;
