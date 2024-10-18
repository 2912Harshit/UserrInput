import { useState } from "react"
import { InputBox } from "./commonComponents/InputBox"

export const EducationalField=()=>{
    const [tenthSchoolName,setTenthSchoolName]=useState("")
    const [tenthCity,setTenthCity]=useState("")
    const [tenthState,setTenthState]=useState("")
    const [tenthBoard,setTenthBoard]=useState("")
    const [tenthPercent,setTenthPercent]=useState(null)
    const [tenthyearOfPassing,setTenthYearOfPassing]=useState(null)
    const [twelveSchoolName,setTwelveSchoolName]=useState("")
    const [twelveCity,setTwelveCity]=useState("")
    const [twelveState,setTwelveState]=useState("")
    const [twelveBoard,setTwelveBoard]=useState("")
    const [twelvePercent,setTwelvePercent]=useState(null)
    const [twelveyearOfPassing,setTwelveYearOfPassing]=useState(null)
    const [diplomaCollegeName,setDiplomaCollegeName]=useState("")
    const [diplomaCity,setDiplomaCity]=useState("")
    const [diplomaState,setDiplomaState]=useState("")
    const [diplomaPercent,setDiplomaPercent]=useState(null)
    const [diplomayearOfPassing,setDiplomaYearOfPassing]=useState(null)
    const [diplomaClick,setDiplomaClick]=useState(false)

    const handleDiplomaClick=()=>{
        
        {diplomaClick?(setDiplomaClick(false)):(setDiplomaClick(true))}
    }
    return (
        <div className="px-5 h-full  m-4 p-4">
            <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
                <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                    10th Standard
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"School Name"} placeholder={" "} onChange={(e)=>{setTenthSchoolName(e.target.value)}} value={tenthSchoolName}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"City"} placeholder={" "} onChange={(e)=>{setTenthCity(e.target.value)}} value={tenthCity}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"State"} placeholder={" "} onChange={(e)=>{setTenthState(e.target.value)}} value={tenthState}/>
                    </div>
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"10th (%/CGPA)"} placeholder={" "} onChange={(e)=>{setTenthPercent(e.target.value)}} value={tenthPercent}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"10th Board"} placeholder={"MP Board"} onChange={(e)=>{setTenthBoard(e.target.value)}} value={tenthBoard}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"Year of Passing"} placeholder={" "} onChange={(e)=>{setTenthYearOfPassing(e.target.value)}} value={tenthyearOfPassing}/>
                    </div>
                </div>
            </div>
            <div className="border border-emerald-200 pb-10 rounded-3xl mt-4 mb-5">
                <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                    12th Standard
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"School Name"} placeholder={" "} onChange={(e)=>{setTwelveSchoolName(e.target.value)}} value={twelveSchoolName}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"City"} placeholder={" "} onChange={(e)=>{setTwelveCity(e.target.value)}} value={twelveCity}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"State"} placeholder={" "} onChange={(e)=>{setTwelveState(e.target.value)}} value={twelveState}/>
                    </div>
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"12th (%/CGPA)"} placeholder={" "} onChange={(e)=>{setTwelvePercent(e.target.value)}} value={twelvePercent}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"12th Board"} placeholder={"RGPV"} onChange={(e)=>{setTwelveBoard(e.target.value)}} value={twelveBoard}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"Year of Passing"} placeholder={" "} onChange={(e)=>{setTwelveYearOfPassing(e.target.value)}} value={twelveyearOfPassing}/>
                    </div>
                </div>
            </div>
            <button onClick={handleDiplomaClick} className=" p-2 rounded-full text-blue-600 bg-white border border-blue-400 px-5 hover:bg-blue-500 hover:text-white">{`Diploma (if applicable)`}</button>
            
            {diplomaClick?
            <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
                <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                    Diploma
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"College Name"} placeholder={" "} onChange={(e)=>{setDiplomaCollegeName(e.target.value)}} value={diplomaCollegeName}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"City"} placeholder={" "} onChange={(e)=>{setDiplomaCity(e.target.value)}} value={diplomaCity}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"State"} placeholder={" "} onChange={(e)=>{setDiplomaState(e.target.value)}} value={diplomaState}/>
                    </div>
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Diploma %"} placeholder={" "} onChange={(e)=>{setDiplomaPercent(e.target.value)}} value={diplomaPercent}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"Year of Passing"} placeholder={" "} onChange={(e)=>{setDiplomaYearOfPassing(e.target.value)}} value={diplomayearOfPassing}/>
                    </div>
                </div>
            </div>:<div>  </div>}
        </div>
    )
}