import { NextButton } from "./commonComponents/NextButton"
import { EducationalField } from "./EducationalField"

export const EducationDetails=()=>{
    return(
        <div className="bg-slate-100 px-10">
            <div className=" pt-12 text-lg md:text-3xl  font-medium pb-5">{`PERSONAL DETAILS > EDUCATIONAL DETAILS`}</div>
            <div className="bg-white shadow-lg py-5 pb-16">
                <EducationalField/>
            </div>
            <div className="flex justify-end p-4">
                <NextButton/>
            </div>
        
      </div>
    )
}