import { useNavigate } from "react-router-dom"
import { NextButton } from "./commonComponents/NextButton"
import { CourseProgressDetails } from "./CourseProgressDetails"
import { EducationDetails } from "./EducationDetails"
import { GraduationDetails } from "./GrahuationDetails"
import { PersonalDetails } from "./PersonalDetails"
import axios from "axios"
import { useState } from "react"

export const Preview= ({ initialData, onSave})=>{
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handlePrevious=()=>{
        navigate('/progress')
    }
    const handleSubmit = async () => {
        if (!initialData) {
            setError("No form data available to submit");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/student/student-user-profile",
                initialData
            );
            
            if (response.status === 200) {
                navigate("/student");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Failed to submit form data");
            console.error("Submission error:", err);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="bg-slate-100 relative">
            <div className="flex justify-center fixed  left-0 right-0 top-0  bg-emerald-200  pt-12  text-5xl text-teal-600 font-medium pb-5 antialiased">
                PREVIEW
            </div>
            <div className="mt-24">

            </div>
            <div className="">
                <PersonalDetails initialData={initialData} onSave={onSave} preview={false}  />
                <EducationDetails initialData={initialData} onSave={onSave} preview={false}/>
                <GraduationDetails initialData={initialData} onSave={onSave} preview={false}/>
                <CourseProgressDetails initialData={initialData} onSave={onSave} preview={false}/>
            </div>
            <div className="flex justify-between">
                <div className="p-4">
                    <NextButton type="button" onClick={handlePrevious} value="<- Previous"/>
                </div>
                <div className="p-4">
                <NextButton type='submit' onClick={handleSubmit}
                        value={isSubmitting ? "Submitting..." : "Confirm"}
                        disabled={isSubmitting}/>
                </div>
            </div>
            
            
        </div>
    )
}