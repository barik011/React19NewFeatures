import { UserInfo } from "./UserInfo";
export const UserWrap = ({id,...rest}) =>{
    return(
        <div>
            <h3>User {id} Details</h3>
            <UserInfo {...rest} />
        </div>
    )
}