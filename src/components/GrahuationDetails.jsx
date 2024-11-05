import { useState } from "react"
import { NextButton } from "./commonComponents/NextButton"
import { InputBox } from "./commonComponents/InputBox"
import { useNavigate } from "react-router-dom"

export const GraduationDetails = ({ initialData, onSave, preview }) => {
    const isPreview=!preview;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        graduationBranch: initialData?.graduationBranch || "",
        graduationCourse: initialData?.graduationCourse || "",
        graduationCollege: initialData?.graduationCollege || "",
        courseRunBy: initialData?.courseRunBy || "",
        graduationPercent: initialData?.graduationPercent || null,
        graduationYearOfPassing: initialData?.graduationYearOfPassing || null
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        navigate('/progress'); 
    };

    const handlePrevious=()=>{
        navigate('/educational');
    };

    return (
        <div className='    px-10 '>
            
            <div className="pt-12 text-3xl  text-teal-600 font-medium pb-5 antialiased">GRADUATION DETAILS</div>

            
            {/* {initialData && (
                <div className="bg-yellow-100 p-4 mb-4 rounded">
                    <h3 className="font-bold">Current State:</h3>
                    <pre className="whitespace-pre-wrap">
                        {JSON.stringify(initialData, null, 2)}
                    </pre>
                </div>
            )} */}


            <form onSubmit={handleSubmit}>
                <div className="bg-white shadow-lg py-5 pb-16">
                    <div className="px-5  md:pt-5 md:flex justify-around">
                        <div className="md:w-52 lg:w-96 pr-2">
                            <InputBox disabled={isPreview}
                                label="Graduation College Name" 
                                placeholder=" " 
                                onChange={(e) => handleInputChange('graduationCollege', e.target.value)}
                                value={formData.graduationCollege}
                            />
                        </div>
                        <div className="md:w-52 lg:w-96 pr-2">
                            <InputBox disabled={isPreview}
                                label="Graduation Course" 
                                placeholder=" " 
                                onChange={(e) => handleInputChange('graduationCourse', e.target.value)}
                                value={formData.graduationCourse}
                            />
                        </div>
                        <div className="md:w-52 lg:w-96">
                            <InputBox disabled={isPreview}
                                label="Graduation Branch" 
                                placeholder=" " 
                                onChange={(e) => handleInputChange('graduationBranch', e.target.value)}
                                value={formData.graduationBranch}
                            />
                        </div>
                    </div>
                    <div className="px-5 md:pt-20 md:flex justify-around">
                        <div className="md:w-52 lg:w-96 pr-2">
                            <InputBox disabled={isPreview}
                                label="Course Run by" 
                                placeholder="RGPV" 
                                onChange={(e) => handleInputChange('courseRunBy', e.target.value)}
                                value={formData.courseRunBy}
                            />
                        </div>
                        <div className="md:w-52 lg:w-96 pr-2">
                            <InputBox disabled={isPreview}
                                label="Graduation (%/CGPA)" 
                                placeholder=" " 
                                onChange={(e) => handleInputChange('graduationPercent', e.target.value)}
                                value={formData.graduationPercent}
                            />
                        </div>
                        <div className="md:w-52 lg:w-96">
                            <InputBox disabled={isPreview}
                                label="Year of Passing" 
                                placeholder=" " 
                                onChange={(e) => handleInputChange('graduationYearOfPassing', e.target.value)}
                                value={formData.graduationYearOfPassing}
                            />
                        </div>
                    </div>
                </div>
                {preview&&
                <div className="flex justify-between">
                    <div className="  p-4">
                        <NextButton type='button' onClick={handlePrevious} value='<- Previous'/>
                    </div>
                    <div className=" p-4">
                        <NextButton type='submit' value='Save & Next->'/>
                    </div>
                </div>}
            </form>
           
        </div>
    );
};