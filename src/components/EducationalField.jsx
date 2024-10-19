import { useState } from "react"
import { InputBox } from "./commonComponents/InputBox"
import { NextButton } from "./commonComponents/NextButton"
import { useNavigate } from "react-router-dom";

export const EducationalField = ({ initialData, onSave }) => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        tenthSchoolName: initialData?.tenthSchoolName || "",
        tenthCity: initialData?.tenthCity || "",
        tenthState: initialData?.tenthState || "",
        tenthBoard: initialData?.tenthBoard || "",
        tenthPercent: initialData?.tenthPercent || null,
        tenthYearOfPassing: initialData?.tenthYearOfPassing || null,
        twelveSchoolName: initialData?.twelveSchoolName || "",
        twelveCity: initialData?.twelveCity || "",
        twelveState: initialData?.twelveState || "",
        twelveBoard: initialData?.twelveBoard || "",
        twelvePercent: initialData?.twelvePercent || null,
        twelveYearOfPassing: initialData?.twelveYearOfPassing || null,
        diplomaCollegeName: initialData?.diplomaCollegeName || "",
        diplomaCity: initialData?.diplomaCity || "",
        diplomaState: initialData?.diplomaState || "",
        diplomaPercent: initialData?.diplomaPercent || null,
        diplomaYearOfPassing: initialData?.diplomaYearOfPassing || null,
    });

    const [diplomaClick, setDiplomaClick] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleDiplomaClick=()=>{
        setDiplomaClick(!diplomaClick);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSave(formData);
    };

    const handlePrevious=()=>{
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white shadow-lg py-5 pb-16 h-full">
                <div className="px-5 h-full m-4 p-4">
                    <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
                        <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                            10th Standard
                        </div>
                        <div className="px-5 md:pt-5 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="School Name" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('tenthSchoolName', e.target.value)}
                                    value={formData.tenthSchoolName}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="City" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('tenthCity', e.target.value)}
                                    value={formData.tenthCity}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96">
                                <InputBox 
                                    label="State" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('tenthState', e.target.value)}
                                    value={formData.tenthState}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-5 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="10th (%/CGPA)" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('tenthPercent', e.target.value)}
                                    value={formData.tenthPercent}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="10th Board" 
                                    placeholder="MP Board" 
                                    onChange={(e) => handleInputChange('tenthBoard', e.target.value)}
                                    value={formData.tenthBoard}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96">
                                <InputBox 
                                    label="Year of Passing" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('tenthYearOfPassing', e.target.value)}
                                    value={formData.tenthYearOfPassing}
                                />
                            </div>
                        </div>
                    </div>

                    
                    <div className="border border-emerald-200 pb-10 rounded-3xl mt-4 mb-5">
                        <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                            12th Standard
                        </div>
                        <div className="px-5 md:pt-5 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="School Name" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('twelveSchoolName', e.target.value)}
                                    value={formData.twelveSchoolName}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="City" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('twelveCity', e.target.value)}
                                    value={formData.twelveCity}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96">
                                <InputBox 
                                    label="State" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('twelveState', e.target.value)}
                                    value={formData.twelveState}
                                />
                            </div>
                        </div>
                        <div className="px-5 md:pt-5 md:flex justify-around">
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="12th (%/CGPA)" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('twelvePercent', e.target.value)}
                                    value={formData.twelvePercent}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96 pr-2">
                                <InputBox 
                                    label="12th Board" 
                                    placeholder="CBSE" 
                                    onChange={(e) => handleInputChange('twelveBoard', e.target.value)}
                                    value={formData.twelveBoard}
                                />
                            </div>
                            <div className="md:w-52 lg:w-96">
                                <InputBox 
                                    label="Year of Passing" 
                                    placeholder=" " 
                                    onChange={(e) => handleInputChange('twelveYearOfPassing', e.target.value)}
                                    value={formData.twelveYearOfPassing}
                                />
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={handleDiplomaClick} 
                        type="button"
                        className="p-2 rounded-full text-blue-600 bg-white border border-blue-400 px-5 hover:bg-blue-500 hover:text-white"
                    >
                        Diploma (if applicable)
                    </button>

                    {diplomaClick && (
                        <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
                            <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
                                Diploma
                            </div>
                            <div className="px-5 md:pt-5 md:flex justify-around">
                                <div className="md:w-52 lg:w-96 pr-2">
                                    <InputBox 
                                        label="College Name" 
                                        placeholder=" " 
                                        onChange={(e) => handleInputChange('diplomaCollegeName', e.target.value)}
                                        value={formData.diplomaCollegeName}
                                    />
                                </div>
                                <div className="md:w-52 lg:w-96 pr-2">
                                    <InputBox 
                                        label="City" 
                                        placeholder=" " 
                                        onChange={(e) => handleInputChange('diplomaCity', e.target.value)}
                                        value={formData.diplomaCity}
                                    />
                                </div>
                                <div className="md:w-52 lg:w-96">
                                    <InputBox 
                                        label="State" 
                                        placeholder=" " 
                                        onChange={(e) => handleInputChange('diplomaState', e.target.value)}
                                        value={formData.diplomaState}
                                    />
                                </div>
                            </div>
                            <div className="px-5 md:pt-5 md:flex justify-around">
                                <div className="md:w-52 lg:w-96 pr-2">
                                    <InputBox 
                                        label="Diploma %" 
                                        placeholder=" " 
                                        onChange={(e) => handleInputChange('diplomaPercent', e.target.value)}
                                        value={formData.diplomaPercent}
                                    />
                                </div>
                                <div className="md:w-52 lg:w-96">
                                    <InputBox 
                                        label="Year of Passing" 
                                        placeholder=" " 
                                        onChange={(e) => handleInputChange('diplomaYearOfPassing', e.target.value)}
                                        value={formData.diplomaYearOfPassing}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                
            </div>
            <div className="flex justify-between">
                    <div className="  p-4">
                        <NextButton type='button' onClick={handlePrevious} value='<- Previous'/>
                    </div>
                    <div className=" p-4">
                        <NextButton type='submit' value='Save & Next->'/>
                    </div>
                </div>
        </form>
    );
};