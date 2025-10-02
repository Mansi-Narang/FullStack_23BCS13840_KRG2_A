import "./ProductCard.css"

function ProductCard({name, price, description, inStock}) {
    return ( 
        <>
            <div id="product">
                <p>Product Name : {name}</p>
                <p>Price : Rs. {price}</p>
                <p>Description : {description}</p>
                {inStock ? <p style={{color: "green", fontSize: "15px"}}>Buy Now</p> : <p style={{color : "red", fontSize: "15px"}}>Out of Stock!</p>}
            </div>
        </>
     );
}

export default ProductCard;