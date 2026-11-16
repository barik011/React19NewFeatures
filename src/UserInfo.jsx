export const UserInfo = ({id,name,age,address,mobile})=>{
    return(
        <div>
            <h4>User : {name}</h4>
            <p>Age : {age}</p>
            <p>Address : {address}</p>
            <p>Mobile : {mobile}</p>
        </div>
    )
}