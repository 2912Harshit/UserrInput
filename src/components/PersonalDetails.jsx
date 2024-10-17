import { InputBox } from "./commonComponents/InputBox"
import { NextButton } from "./commonComponents/NextButton"
import { EducationDetails } from "./EducationDetails"
import InputField from "./InputField"

export const PersonalDetails=()=>{
    return(
        <div className="bg-slate-100 px-10">
            <div className=" pt-12 text-3xl text-teal-600 font-medium pb-5 antialiased">PERSONAL DETAILS</div>
            <div className="bg-white shadow-lg py-5 pb-16">
                <InputField/>
            </div>
            <div className="flex justify-end p-4">
                <NextButton />
            </div>
        
      </div>
    )
}