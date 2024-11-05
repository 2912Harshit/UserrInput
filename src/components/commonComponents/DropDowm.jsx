import React from 'react';
export const DropDown=({ inputs,label,value,onChange,disabled })=>{
    return(
        <div className=''>
            <div className='text-sm font-medium text-left py-2'>
                {label}
            </div>
            <select value={value}  disabled={disabled} onChange={onChange} className={`w-full px-2 py-1 ${disabled ? 'bg-slate-100' : 'bg-slate-200'} md:py-2 border rounded border-slate-300  `}>
                {inputs.map(input => (<option value={input}>{input}</option>))};
            </select>
        </div>
        
    )
}