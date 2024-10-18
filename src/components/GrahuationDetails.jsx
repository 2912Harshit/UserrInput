import { useState } from "react"
import { NextButton } from "./commonComponents/NextButton"
import { InputBox } from "./commonComponents/InputBox"

export const GraduationDetails=()=>{
    const [graduationBranch,setGraduationBranch]=useState("")
    const [graduationCourse,setGraduationCourse]=useState("")
    const [graduationCollege,setGraduationCollege]=useState("")
    const [courseRunBy,setCourseRunBy]=useState("")
    const [graduationPercent,setGraduationPercent]=useState(null)
    const [graduationYearOfPassing,setGraduationYearOfPassing]=useState(null)

    return(
        <div className="bg-slate-100 px-10 h-screen">
            <div className="pt-12 text-3xl text-teal-600 font-medium pb-5 antialiased">{`GRADUATION DETAILS`}</div>
            <div className="bg-white shadow-lg py-5 pb-16">
                <div className="px-5 md:pt-5  md:flex justify-around">
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Graduation College Name"} placeholder={" "} onChange={(e)=>{setGraduationCollege(e.target.value)}} value={graduationCollege}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Graduation Course"} placeholder={" "} onChange={(e)=>{setGraduationCourse(e.target.value)}} value={graduationCourse}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"Graduation Branch"} placeholder={" "} onChange={(e)=>{setGraduationBranch(e.target.value)}} value={graduationBranch}/>
                    </div>
                        
                </div>
                <div className="px-5  md:pt-20  md:flex justify-around">
                     <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Course Run by"} placeholder={"RGPV"} onChange={(e)=>{setCourseRunBy(e.target.value)}} value={courseRunBy}/>
                    </div>
                    <div className="md:w-52 lg:w-96 pr-2">
                        <InputBox label={"Graduation (%/CGPA)"} placeholder={" "} onChange={(e)=>{setGraduationPercent(e.target.value)}} value={graduationPercent}/>
                    </div>
                    <div className="md:w-52 lg:w-96">
                        <InputBox label={"Year of Passing"} placeholder={" "} onChange={(e)=>{setGraduationYearOfPassing(e.target.value)}} value={graduationYearOfPassing}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-end p-4">
                <NextButton/>
            </div>
        
      </div>
    )
}