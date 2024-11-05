export function InputBox({label,placeholder,onChange,value,disabled}){
    return <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
                <input value={value} disabled={disabled} onChange={onChange} placeholder={placeholder} className={`w-full px-2 py-1 ${disabled ? 'bg-slate-100' : 'bg-slate-200'} md:py-2 border rounded border-slate-300  `}/>
        </div>
    
}