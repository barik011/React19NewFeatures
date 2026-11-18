export const Menu =({name,price,onOrder,btnName='Order'})=>{
    return(<div>
        <span>{`Name: ${name} -- Price: ${price}`}</span>
        <button onClick={()=>onOrder(name,price)}>{btnName}</button>
    </div>)
}