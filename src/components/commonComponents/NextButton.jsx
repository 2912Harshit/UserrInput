export const NextButton=({value,type,onClick})=>{
    return(
        <button onClick={onClick} type={type} className="shadow-lg p-2 rounded-md text-white bg-teal-600 border border-teal-500 px-5 hover:bg-teal-500 hover:text-white">{value}</button>
    )
}