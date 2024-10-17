import React from 'react';
export const DropDown=({ inputs,label })=>{
    return(
        <div>
            <div className='text-sm font-medium text-left py-2'>
                {label}
            </div>
            <select className="w-full px-2 py-1 md:py-2 border border-slate-300 bg-slate-200 rounded">
                {inputs.map(input => (<option value={input}>{input}</option>))};
            </select>
        </div>
        
    )
}