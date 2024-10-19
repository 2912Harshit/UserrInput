import { useState } from "react";
import { InputBox } from "./commonComponents/InputBox";
import { NextButton } from "./commonComponents/NextButton";
import { useNavigate } from "react-router-dom";

export const CourseProgressField = ({ initialData, onSave,preview }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstSGPA: initialData?.firstSGPA || null,
        firstBacklogs: initialData?.firstBacklogs || "",
        secondSGPA: initialData?.secondSGPA || null,
        secondBacklogs: initialData?.secondBacklogs || "",
        thirdSGPA: initialData?.thirdSGPA || null,
        thirdBacklogs: initialData?.thirdBacklogs || "",
        fourthSGPA: initialData?.fourthSGPA || null,
        fourthBacklogs: initialData?.fourthBacklogs || "",
        fifthSGPA: initialData?.fifthSGPA || null,
        fifthBacklogs: initialData?.fifthBacklogs || "",
        sixthSGPA: initialData?.sixthSGPA || null,
        sixthBacklogs: initialData?.sixthBacklogs || "",
        seventhSGPA: initialData?.seventhSGPA || null,
        seventhBacklogs: initialData?.seventhBacklogs || "",
        currentCGPA: initialData?.currentCGPA || null,
        pendingBacklogs: initialData?.pendingBacklogs || ""
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
    };

    const handlePrevious = () => {
        navigate('/graduation'); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white shadow-lg py-5  pb-16">
                <div className="px-5 h-full m-4 p-4">
                    <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
                        <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                            Semester Details
                        </div>
                        <div className="px-5 md:pt-5 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="1st Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('firstSGPA', e.target.value)}
                                    value={formData.firstSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="1st Sem Backlogs"
                                    placeholder="AL-204,AL-305..."
                                    onChange={(e) => handleInputChange('firstBacklogs', e.target.value)}
                                    value={formData.firstBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="2nd Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('secondSGPA', e.target.value)}
                                    value={formData.secondSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="2nd Sem Backlogs"
                                    placeholder="AL-201,AL-303..."
                                    onChange={(e) => handleInputChange('secondBacklogs', e.target.value)}
                                    value={formData.secondBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="3rd Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('thirdSGPA', e.target.value)}
                                    value={formData.thirdSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="3rd Sem Backlogs"
                                    placeholder="AL-202,AL-205..."
                                    onChange={(e) => handleInputChange('thirdBacklogs', e.target.value)}
                                    value={formData.thirdBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="4th Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('fourthSGPA', e.target.value)}
                                    value={formData.fourthSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="4th Sem Backlogs"
                                    placeholder="AL-204,AL-305..."
                                    onChange={(e) => handleInputChange('fourthBacklogs', e.target.value)}
                                    value={formData.fourthBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="5th Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('fifthSGPA', e.target.value)}
                                    value={formData.fifthSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="5th Sem Backlogs"
                                    placeholder="AL-204,AL-305..."
                                    onChange={(e) => handleInputChange('fifthBacklogs', e.target.value)}
                                    value={formData.fifthBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="6th Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('sixthSGPA', e.target.value)}
                                    value={formData.sixthSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="6th Sem Backlogs"
                                    placeholder="AL-204,AL-305..."
                                    onChange={(e) => handleInputChange('sixthBacklogs', e.target.value)}
                                    value={formData.sixthBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="7th Semester SGPA"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('seventhSGPA', e.target.value)}
                                    value={formData.seventhSGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="7th Sem Backlogs"
                                    placeholder="AL-204,AL-305..."
                                    onChange={(e) => handleInputChange('seventhBacklogs', e.target.value)}
                                    value={formData.seventhBacklogs}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-14 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="Aggregate(Current CGPA)"
                                    placeholder=" "
                                    onChange={(e) => handleInputChange('currentCGPA', e.target.value)}
                                    value={formData.currentCGPA}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="Pending Backlogs"
                                    placeholder="AL-204,AL-305..."
                                    onChange={(e) => handleInputChange('pendingBacklogs', e.target.value)}
                                    value={formData.pendingBacklogs}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {preview&&
            <div className="flex justify-between">
                <div className="p-4">
                    <NextButton type="button" onClick={handlePrevious} value="<- Previous"/>
                </div>
                <div className="p-4">
                    <NextButton type="submit" value="Save & Next->"/>
                </div>
            </div>}
        </form>
    );
};