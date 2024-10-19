import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'
import { PersonalDetails } from './components/PersonalDetails'
import { EducationDetails } from './components/EducationDetails'
import { GraduationDetails } from './components/GrahuationDetails'
import { CourseProgressDetails } from './components/CourseProgressDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [formData,setFormData]=useState({});

  const saveFormData = (newData)=>{
    setFormData(prev=>({
      ...prev,
      ...newData
    }));
    console.log("Global state updated:",formData)
  };

  return (
    
      <div>
        {/* <InputField/> */}
        {/* <PersonalDetails/> */}
        {/* <EducationDetails/> */}
        {/* <GraduationDetails/> */}
        {/* <CourseProgressDetails/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PersonalDetails initialData={formData} onSave={saveFormData}/>}/>
            <Route path="/educational" element={<EducationDetails initialData={formData} onSave={saveFormData}/>}/>
            <Route path="/graduation" element={<GraduationDetails initialData={formData} onSave={saveFormData}/>}/>
            <Route path="/progress" element={<CourseProgressDetails initialData={formData} onSave={saveFormData}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      
    
  )
}

export default App
