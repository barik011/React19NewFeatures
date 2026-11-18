import { Menu } from "./Menu"

export const MenuList=()=>{
    const orderHandle =(orderName,price)=>{
        alert(`Oredr Name: ${orderName} -- Price: ${price}`)
    }

    return(
        <div>
            <Menu name="Pizza" price="500" onOrder={orderHandle}/>
            <Menu name="Burger" price="150" onOrder={orderHandle}/>
            <Menu name="Sandwicth" price="300" onOrder={orderHandle}/>
        </div>
    )
}