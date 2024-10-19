import { NextButton } from "./commonComponents/NextButton"
import { CourseProgressDetails } from "./CourseProgressDetails"
import { EducationDetails } from "./EducationDetails"
import { GraduationDetails } from "./GrahuationDetails"
import { PersonalDetails } from "./PersonalDetails"

export const Preview=({ initialData, onSave})=>{
    
    return (
        <div className="bg-slate-100 relative">
            <div className="flex justify-center fixed left-0 right-0 top-0  bg-emerald-200  pt-12  text-5xl text-teal-600 font-medium pb-5 antialiased">
                PREVIEW
            </div>
            <div className="mt-24">

            </div>
            <PersonalDetails initialData={initialData} onSave={onSave} preview={false} />
            <EducationDetails initialData={initialData} onSave={onSave} preview={false}/>
            <GraduationDetails initialData={initialData} onSave={onSave} preview={false}/>
            <CourseProgressDetails initialData={initialData} onSave={onSave} preview={false}/>
            <div className="p-4 flex justify-end">
                <NextButton type='submit' value='Confirm'/>
            </div>
            
        </div>
    )
}