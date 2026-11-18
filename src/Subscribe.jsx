import { CustomButton } from "./CustomButton"

export const Subscribe =()=>{
    const onHandleSub=()=>{
        alert('Subscribe call excuted')
    }
    return(<div>
        <h4>Subscribe Page</h4>
        <CustomButton name="Subscribe" onClick={onHandleSub}></CustomButton>
    </div>)
}