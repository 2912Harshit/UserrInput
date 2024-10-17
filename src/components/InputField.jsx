import { useState } from "react"
import { InputBox } from "./commonComponents/InputBox"
import { PreKnownInputBox } from "./commonComponents/PreKnownInputBox"
import { DropDown } from "./commonComponents/DropDowm"
import { Calendar } from 'primereact/calendar';
        
const InputField=()=> {
    
    const [dob,setDob]=useState(null);
    const [aadhar,setAadhar]=useState("")
    const [pan,setPan]=useState("")
    const [email,setEmail]=useState("")
    const [studentContact,setStudentContact]=useState(null)
    const [studentWhatsApp,setstudentWhatsApp]=useState(null)
    const [address,setAddress]=useState("")
    const [state,setState]=useState("")
    const [city,setCity]=useState("")
    const [pincode,setPincode]=useState(null)
    const [father,setFather]=useState("")
    const [mother,setMother]=useState("")
    const [parentContact,setparentContact]=useState(null)

    const gender=["   ","Male","Female","Other"]
    const category=["  ","General","OBC","Schedule Caste","Schedule Tribe"]
    const BloodGroup=["  ","A positive (A+)","A negative (A-)","B positive (B+)","B negative (B-)","O positive (O+)","O negative (O-)","AB positive (AB+)","AB negative (AB-)"]

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        value = value.slice(0, 12);
        let formattedAadhaar = value
            .replace(/(\d{4})(\d{4})(\d{0,4})/, '$1 $2 $3')
            .trim();

        setAadhar(formattedAadhaar);
    };
  return (
    
    <div className="px-5 h-full">
        <div className="flex justify-around">
            <div className="w-52 md:w-96">
                <PreKnownInputBox label={"NAME"}  value={"Pranshul Gupta"} className="" />
            </div>
            <div className="w-52 md:w-96">
                <PreKnownInputBox label={"ENROLLMENT No."} value={"0176AL221098"}/>
            </div>
        </div>
        <div className="px-5 pt-16 py-3 md:flex justify-around">
            <div className="md:w-52 lg:w-96 ">
                <DropDown inputs={gender} label={"Gender"} className=""/>
            </div>
           <div className=" ">
            <div className="text-sm font-medium text-left py-2">
                DOB (DD/MM/YYYY)
            </div>
             <Calendar inputClassName="w-screen md:w-52 lg:w-96 border border-slate-300 bg-slate-200 px-2 py-1 md:py-2 rounded" variant="filled" value={dob} onChange={(e) => setDob(e.value)} />
           </div>
           <div className="md:w-52 lg:w-96">
                <DropDown inputs={category} label={"Category"}/>
           </div>
            
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96">
                <DropDown inputs={BloodGroup} label={"Blood Group"}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={aadhar} label={"Aadhar Number"} onChange={handleInputChange} placeholder={"XXXX XXXX XXXX"}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={pan} label={"PAN Number"} onChange={e=>{setPan(e.target.value)}} placeholder={"ABCD1234A"} />
            </div>
        </div>
        <div className="pt-14 pb-5 text-teal-400 font-semibold text-2xl flex justify-center">
            Contact Details
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96">
                <InputBox value={email} label={"Email ID"} onChange={e=>{setEmail(e.target.value)}} placeholder={"john@gmail.com"}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={studentContact} label={"Student Contact No."} onChange={e=>{setStudentContact(e.target.value)}} placeholder={"9353255756"}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={studentWhatsApp} label={"Student WhatsApp No."} onChange={e=>{setstudentWhatsApp(e.target.value)}} placeholder={"9353732786"}/>
            </div>
        </div>
        <div className="pt-14 pb-5 text-teal-400 font-semibold text-2xl flex justify-center">
            Address
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96">
                <InputBox value={address} label={"Permanent Address(as per Aadhar)"} onChange={e=>{setAddress(e.target.value)}} placeholder={" "}/>
            </div>
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96">
                <InputBox value={state} onChange={e=>{setState(e.target.value)}} label={"State"} placeholder={"  "}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={city} onChange={e=>{setCity(e.target.value)}} label={"City"} placeholder={"  "}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={pincode} onChange={e=>{setPincode(e.target.value)}} label={"Pincode"} placeholder={"  "}/>
            </div>
        </div>
        <div className=" pt-14 text-teal-400 pb-5 font-semibold text-2xl flex justify-center">
            Parents Details
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96">
                <InputBox label={"Father Name"} onChange={e=>{setFather(e.target.value)}} value={father} placeholder={" "}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox label={"Mother Name"} onChange={e=>{setMother(e.target.value)}} value={mother} placeholder={" "}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox value={parentContact} label={"Parents Contact No."} onChange={e=>{setparentContact(e.target.value)}} placeholder={"8153255756"}/>
            </div>
        </div>
        {aadhar}
    </div>
    
  )
}

export default InputField
