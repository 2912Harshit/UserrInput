import { useState } from "react"
import { InputBox } from "./commonComponents/InputBox"

export const CourseProgressField=()=>{
    const [firstSGPA,setFirstSGPA]=useState(null)
    const [firstBacklogs,setFirstBacklogs]=useState("")
    const [secondSGPA,setSecondSGPA]=useState(null)
    const [secondBacklogs,setSecondBacklogs]=useState("")
    const [thirdSGPA,setThirdSGPA]=useState(null)
    const [thirdBacklogs,setThirdBacklogs]=useState("")
    const [fourthSGPA,setFourthSGPA]=useState(null)
    const [fourthBacklogs,setFourthBacklogs]=useState("")
    const [fifthSGPA,setFifthSGPA]=useState(null)
    const [fifthBacklogs,setFifthBacklogs]=useState("")
    const [sixthSGPA,setSixthSGPA]=useState(null)
    const [sixthBacklogs,setSixthBacklogs]=useState("")
    const [seventhSGPA,setSeventhSGPA]=useState(null)
    const [seventhBacklogs,setSeventhBacklogs]=useState("")
    const [currentCGPA,setCurrentCGPA]=useState(null)
    const [PendingBacklogs,setPendingBacklogs]=useState("")
    
    return(
        <div className="px-5 h-full  m-4 p-4">
            <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
                <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                    Semester Details
                </div>
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"1st Semester SGPA"} placeholder={" "} onChange={(e)=>{setFirstSGPA(e.target.value)}} value={firstSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"1st Sem Backlogs"} placeholder={"AL-204,AL-305..."} onChange={(e)=>{setFirstBacklogs(e.target.value)}} value={firstBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"2nd Semester SGPA"} placeholder={" "} onChange={(e)=>{setSecondSGPA(e.target.value)}} value={secondSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"2nd Sem Backlogs"} placeholder={"AL-201,AL-303..."} onChange={(e)=>{setSecondBacklogs(e.target.value)}} value={secondBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"3rd Semester SGPA"} placeholder={" "} onChange={(e)=>{setThirdSGPA(e.target.value)}} value={thirdSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"3rd Sem Backlogs"} placeholder={"AL-202,AL-205..."} onChange={(e)=>{setThirdBacklogs(e.target.value)}} value={thirdBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"4th Semester SGPA"} placeholder={" "} onChange={(e)=>{setFourthSGPA(e.target.value)}} value={fourthSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"4th Sem Backlogs"} placeholder={"AL-204,AL-305..."} onChange={(e)=>{setFourthBacklogs(e.target.value)}} value={fourthBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"5th Semester SGPA"} placeholder={" "} onChange={(e)=>{setFifthSGPA(e.target.value)}} value={fifthSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"5th Sem Backlogs"} placeholder={"AL-204,AL-305..."} onChange={(e)=>{setFifthBacklogs(e.target.value)}} value={fifthBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"6th Semester SGPA"} placeholder={" "} onChange={(e)=>{setSixthSGPA(e.target.value)}} value={sixthSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"6th Sem Backlogs"} placeholder={"AL-204,AL-305..."} onChange={(e)=>{setSixthBacklogs(e.target.value)}} value={sixthBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"7th Semester SGPA"} placeholder={" "} onChange={(e)=>{setSeventhSGPA(e.target.value)}} value={seventhSGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"7th Sem Backlogs"} placeholder={"AL-204,AL-305..."} onChange={(e)=>{setSeventhBacklogs(e.target.value)}} value={seventhBacklogs}/>
                    </div>
                </div>
                <div className="px-5 md:pt-14  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Aggregate(Current CGPA)"} placeholder={" "} onChange={(e)=>{setCurrentCGPA(e.target.value)}} value={currentCGPA}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Pending Backlogs"} placeholder={"AL-204,AL-305..."} onChange={(e)=>{setPendingBacklogs(e.target.value)}} value={PendingBacklogs}/>
                    </div>
                </div>
            </div>
        </div>
    )
}