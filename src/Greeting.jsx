export const Greeting=({name="Default Name",message="Default Message",children})=>{
    return(
        <>
        <h2>{message} | {name}</h2>
        {children}
        </>
    )
}