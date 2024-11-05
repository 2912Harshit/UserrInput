import { useState } from "react"
import { InputBox } from "./commonComponents/InputBox"
import { PreKnownInputBox } from "./commonComponents/PreKnownInputBox"
import { DropDown } from "./commonComponents/DropDowm"
import { Calendar } from 'primereact/calendar';
import { NextButton } from "./commonComponents/NextButton";
import DatePicker from "./commonComponents/DataPicker";
        
const InputField=({initialData, onSave, preview})=> {
    const isPreview = !preview;
    
    const [formData, setFormData] = useState({
        dob: initialData?.dob || null,
        aadhar: initialData?.aadhar || "",
        pan: initialData?.pan || "",
        email: initialData?.email || "",
        studentContact: initialData?.studentContact || null,
        studentWhatsApp: initialData?.studentWhatsApp || null,
        address: initialData?.address || "",
        state: initialData?.state || "",
        city: initialData?.city || "",
        pincode: initialData?.pincode || null,
        father: initialData?.father || "",
        mother: initialData?.mother || "",
        parentContact: initialData?.parentContact || null,
        gender: initialData?.gender || "",
        category: initialData?.category || "",
        bloodGroup: initialData?.bloodGroup || ""
    });

    const gender = ["   ", "Male", "Female", "Other"]
    const category = ["  ", "General", "OBC", "Schedule Caste", "Schedule Tribe"]
    const BloodGroup = ["  ", "A positive (A+)", "A negative (A-)", "B positive (B+)", "B negative (B-)", "O positive (O+)", "O negative (O-)", "AB positive (AB+)", "AB negative (AB-)"]

    const handleInputChange = (field, value) => {
        // if (field === 'aadhar') {
        //     value = value.replace(/\D/g, '');
        //     value = value.slice(0, 12);
        //     value = value.replace(/(\d{4})(\d{4})(\d{0,4})/, '$1 $2 $3').trim();
        // }
        if (isPreview) return;
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isPreview) {
            onSave(formData);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
    <div className="bg-white shadow-lg py-5 pb-16">
    <div className="px-5 h-full  m-4 p-4">
        <div className="sm:flex justify-around">
            <div className="w-52 md:w-96 pr-2">
                <PreKnownInputBox label={"NAME"}  value={"Pranshul Gupta"} className="" />
            </div>
            <div className="w-52 md:w-96">
                <PreKnownInputBox label={"ENROLLMENT No."} value={"0176AL221098"} />
            </div>
        </div>
        <div className="px-5 pt-16 py-3 md:flex justify-around">
            <div className="md:w-52 lg:w-96 pr-2">
                <DropDown disabled={isPreview} inputs={gender} value={formData.gender} onChange={e=>{handleInputChange('gender',e.target.value)}} label={"Gender"} className=""/>
            </div>
           <div className="pr-2 ">
            {/* <div className="text-sm font-medium text-left py-2">
                DOB (DD/MM/YYYY)
            </div> */}
            <div  className="">
                {/* <Calendar value={formData.dob} inputClassName=" md:w-52 lg:w-96 border border-slate-300 bg-slate-200 px-2  py-1 md:py-2 rounded" variant="filled"  onChange={(e) => handleInputChange('dob',e.target.value)} /> */}
                <DatePicker 
                    value={formData.dob} 
                    onChange={(value) => handleInputChange('dob', value)} 
                    disabled={isPreview}/>
            </div>
             
           </div>
           <div className="md:w-52 lg:w-96">
                <DropDown disabled={isPreview} inputs={category} label={"Category"} value={formData.category} onChange={(e)=>handleInputChange('category',e.target.value)}/>
           </div>
            
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around pb-8">
            <div className="md:w-52 lg:w-96 pr-2">
                <DropDown disabled={isPreview} inputs={BloodGroup} label={"Blood Group"} value={formData.bloodGroup} onChange={e=>{handleInputChange('bloodGroup',e.target.value)}}/>
            </div>
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} value={formData.aadhar} label={"Aadhar Number"} onChange={e=>{handleInputChange('aadhar',e.target.value)}} placeholder={"XXXX XXXX XXXX"}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox disabled={isPreview} value={formData.pan} label={"PAN Number"} onChange={e=>{handleInputChange('pan',e.target.value)}} placeholder={"ABCD1234A"} />
            </div>
        </div>
        <div className="border border-emerald-200 pb-10 rounded-3xl">
        <div className="pt-10 pb-5 subpixel-antialiased font-semibold text-2xl flex justify-center">
            Contact Details
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} value={formData.email} label={"Email ID"} onChange={e=>{handleInputChange('email',e.target.value)}} placeholder={"john@gmail.com"}/>
            </div>
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} value={formData.studentContact} label={"Student Contact No."} onChange={e=>{handleInputChange('studentContact',e.target.value)}} placeholder={"9353255756"}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox disabled={isPreview} value={formData.studentWhatsApp} label={"Student WhatsApp No."} onChange={e=>{handleInputChange('studentWhatsApp',e.target.value)}} placeholder={"9353732786"}/>
            </div>
        </div>
        </div>
        <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
        <div className="pt-12 pb-5 subpixel-antialiased  font-semibold text-2xl flex justify-center">
            Address
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96">
                <InputBox disabled={isPreview} value={formData.address} label={"Permanent Address(as per Aadhar)"} onChange={e=>{handleInputChange('address',e.target.value)}} placeholder={" "}/>
            </div>
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} value={formData.state} onChange={e=>{handleInputChange('state',e.target.value)}} label={"State"} placeholder={"  "}/>
            </div>
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} value={formData.city} onChange={e=>{handleInputChange('city',e.target.value)}} label={"City"} placeholder={"  "}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox disabled={isPreview} value={formData.pincode} onChange={e=>{handleInputChange('pincode',e.target.value)}} label={"Pincode"} placeholder={"  "}/>
            </div>
        </div>
        </div>
        <div className="border border-emerald-200 pb-10 rounded-3xl mt-4">
        <div className=" pt-14  pb-5 font-semibold text-2xl flex justify-center subpixel-antialiased">
            Parents Details
        </div>
        <div className="px-5 md:pt-5  md:flex justify-around">
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} label={"Father Name"} onChange={e=>{handleInputChange('father',e.target.value)}} value={formData.father} placeholder={" "}/>
            </div>
            <div className="md:w-52 lg:w-96 pr-2">
                <InputBox disabled={isPreview} label={"Mother Name"} onChange={e=>{handleInputChange('mother',e.target.value)}} value={formData.mother} placeholder={" "}/>
            </div>
            <div className="md:w-52 lg:w-96">
                <InputBox disabled={isPreview} value={formData.parentContact} label={"Parents Contact No."} onChange={e=>{handleInputChange('parentContact',e.target.value)}} placeholder={"8153255756"}/>
            </div>
        </div>
        </div>
        
    </div>
    </div>
    {preview &&
    <div className="flex justify-end p-4">
        <NextButton value='Save & Next ->' type='submit'  />
    </div>}
    </form>
    
  )
}

export default InputField
