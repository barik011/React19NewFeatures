export const UserDetails = ({name, isOnline, isPremium, isNewUser })=>{
        // if(isOnline){
        //   return <div>
        //     <h4>User {name}</h4>
        //     <p>🟢 Online</p>
        //     <p>Avaliable for Chat</p>
        //     <button>Send Message</button>
        // </div>  
        // }
        // return <div>
        //     <h4>User {name}</h4>
        //     <p>🔘 Offline</p>
        //     <p>Not Avaliable for Chat</p>
        //     <small>Check Back Later</small>
        // </div>

        return <div>
             <h4>User {name} {isPremium&&<span>⭐</span>} {isNewUser&&<span>💐</span>}</h4>
             <p>{isOnline?'🟢 Online':'🔘 Offline'}</p>
             <p>{isOnline?'Avaliable for Chat':'Not Avaliable for Chat'}</p>
             {isOnline?(<button>Check Back Later</button>):(<small>Send Message</small>)}
         </div> 
}