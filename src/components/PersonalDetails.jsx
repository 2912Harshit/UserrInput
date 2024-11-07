import { useNavigate } from "react-router-dom"
import { InputBox } from "./commonComponents/InputBox"
import { NextButton } from "./commonComponents/NextButton"
import { EducationDetails } from "./EducationDetails"
import InputField from "./InputField"

export const PersonalDetails=({ initialData, onSave,preview})=>{
    const navigate =useNavigate();

    const handleSave = (formData)=>{
        onSave(formData);
        navigate('/educational');
    }

    
    
    return(
        <div className="bg-slate-100 px-10">
            
                <div className=" pt-12 text-3xl text-teal-600 font-medium pb-5 antialiased">PERSONAL DETAILS</div>
            
            
            {/* {initialData && (
                <div className="bg-yellow-100 p-4 mb-4 rounded">
                    <h3 className="font-bold">Current State:</h3>
                    <pre className="whitespace-pre-wrap">
                        {JSON.stringify(initialData, null, 2)}
                    </pre>
                </div>
            )} */}

            <div>
                <InputField initialData={initialData} onSave={handleSave} preview={preview}/>
            </div>
            
        
      </div>
    )
}