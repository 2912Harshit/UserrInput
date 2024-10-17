export function PreKnownInputBox({label,value}){
    
    
    return <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
                <input  value={value}  className="w-full px-2 py-1 md:py-2 border rounded border-slate-200 cursor-not-allowed" disabled={true}/>
        </div>
    
}