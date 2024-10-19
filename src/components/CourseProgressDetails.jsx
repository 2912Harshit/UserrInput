import { CourseProgressField } from "./CourseProgressField"
import { useNavigate } from "react-router-dom";

export const CourseProgressDetails = ({ initialData, onSave, preview }) => {
    const navigate = useNavigate();

    const handleSave = (formData) => {
        onSave(formData);
        navigate('/preview'); 
    };

    return (
        <div className="bg-slate-100 px-10">
            <div className="pt-12 text-3xl text-teal-600 font-medium pb-5 antialiased">
                COURSE PROGRESS
            </div>
            <CourseProgressField initialData={initialData} onSave={handleSave} preview={preview}/>
        </div>
    );
};
