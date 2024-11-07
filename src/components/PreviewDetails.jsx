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
            const finalData={
                "personalDetails": {
                  "gender": initialData.gender,
                  "dateOfBirth": initialData.dob,
                  "category": initialData.category,
                  "bloodGroup": initialData.bloodGroup,
                  "contact": {
                    "emailId": initialData.email,
                    "studentContact": initialData.studentContact,
                    "studentWhatsapp": initialData.studentWhatsapp
                  },
                  "address": {
                    "permanentAddress": initialData.address,
                    "state": initialData.state,
                    "city": initialData.city,
                    "pincode": initialData.pincode
                  },
                  "parentDetails": {
                    "fatherName": initialData.father,
                    "motherName": initialData.mother,
                    "parentsContact": initialData.parentContact
                  }
                },
                "educationalBackground": {
                  "tenthStandard": {
                    "schoolName": initialData.tenthSchoolName,
                    "city": initialData.tenthCity,
                    "state": initialData.tenthState,
                    "percentage": initialData.tenthPercent,
                    "board": initialData.tenthBoard,
                    "yearOfPassing": initialData.tenthYearOfPassing
                  },
                  "twelfthStandard": {
                    "schoolName": initialData.twelveSchoolName,
                    "city": initialData.twelveCity,
                    "state": initialData.twelveState,
                    "percentage": initialData.twelvePercent,
                    "board": initialData.twelveBoard,
                    "yearOfPassing": initialData.twelveYearOfPassing
                  },
                  "diploma": {
                    "collegeName": initialData.diplomaCollegeName,
                    "city": initialData.diplomaCity,
                    "state": initialData.diplomaState,
                    "percentage": initialData.diplomaPercent,
                    "yearOfPassing": initialData.diplomaYearOfPassing,
                  }
                },
                "graduationDetails": {
                  "collegeName": initialData.graduationCollege,
                  "course": initialData.graduationCourse,
                  "branch": initialData.graduationBranch,
                  "courseRunBy": initialData.courseRunBy,
                  "percentage": initialData.graduationPercent,
                  "yearOfPassing": initialData.graduationYearOfPassing,
                },
                "courseProgress": {
                  "semesterDetails": {
                    "firstSemester": {
                      "sgpa": initialData.firstSGPA,
                      "backlogs": [
                        initialData.firstBacklogs
                      ]
                    },
                    "secondSemester": {
                      "sgpa": initialData.secondSGPA,
                      "backlogs": [
                        initialData.secondBacklogs
                      ]
                    },
                    "thirdSemester": {
                      "sgpa": initialData.thirdSGPA,
                      "backlogs": [
                        initialData.thirdBacklogs
                      ]
                    },
                    "fourthSemester": {
                      "sgpa": initialData.fourthSGPA,
                      "backlogs": [
                        initialData.fourthBacklogs
                      ]
                    },
                    "fifthSemester": {
                      "sgpa": initialData.fifthSGPA,
                      "backlogs": [
                        initialData.fifthBacklogs
                      ]
                    },
                    "sixthSemester": {
                      "sgpa": initialData.sixthSGPA,
                      "backlogs": [initialData.sixthBacklogs]
                    },
                    "seventhSemester": {
                      "sgpa": initialData.seventhSGPA,
                      "backlogs": [initialData.seventhBacklogs]
                    }
                  },
                  "aggregateCGPA": initialData.currentCGPA,
                  "pendingBacklogs": initialData.pendingBacklogs

                }
              }
            const response = await axios.post(
                "http://localhost:8080/api/v1/student/student-user-profile",
                finalData,{
                    headers:{
                        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjEyMzQ1Njc4OSIsInJvbGUiOiJzdHVkZW50IiwibmFtZSI6IkpvaG4gRG9lIn0.ICZx0BP2-0E0qrjSSPsbNYJQMi_CUNK9KaaGqyZeTzY"
                    }
                }
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