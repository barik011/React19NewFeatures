export const CustomButton =({name,onClick})=>{
    // const clickHandler = (e) => {
    //     console.log('Objec Methods of Even:',e)
    //     alert(`click on ${name}!`)
    // }
    return(
        <button onClick={()=>onClick()}>{name}</button>
    )
}