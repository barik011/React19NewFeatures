import { CustomButton } from "./CustomButton"

export const ContactUs = ()=>{
    const onHandleForm=()=>{
        alert('Conatct Form Submitted');
    }
    return (
        <div>
            <h4>Contact Us Form</h4>
            <CustomButton name="Submit" onClick={onHandleForm}></CustomButton>
        </div>
    )
}