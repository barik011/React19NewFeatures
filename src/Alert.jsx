import style from './Alert.module.css'

export const Alert = ({children, type='info'}) =>{
    return(
        // <div style={
        //     {
        //         backgroundColor:type ==='success'?'#15ff00':'#ff0000',
        //         color:'black',
        //         padding:'16px',
        //         marginBottom:'20px',
        //         borderRadius:'8px'
        //     }
        // }>{children}</div>
        <div className={`${style.alert} ${style[type]}`}>{children}</div>
    )
}