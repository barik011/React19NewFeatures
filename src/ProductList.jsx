export const ProductList = () => {

    const productData = [
        {
            id:1,
            prodName: 'Mobile',
            price: 600
        },
        {
            id:2,
            prodName: 'Laptop',
            price: 950
        },
        {
            id:3,
            prodName: 'Tab',
            price: 850
        }
    ];

    const productElement = productData.map((item,index) => {
                    return (<div key={index}>
                        <h5>{item.prodName}</h5>
                        <p>Price: ${item.price}</p>
                    </div>)
                })
    return (
        <div>
            <h4>Our Products</h4>
            {productElement}
            {/* <div>
                <h5>Labtop</h5>
                <p>Price: $900</p>
            </div>
            <div>
                <h5>Tab</h5>
                <p>Price: $680</p>
            </div> */}
        </div>
    )
}