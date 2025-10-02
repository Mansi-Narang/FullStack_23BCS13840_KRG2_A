import ProductCard from "./ProductCard";

function Products(){

    return(
        <>
        <ProductCard name = "Lenovo LOQ" price = {80000} description={"A laptop with such heavy specifications - 3050 GPU, 24GB RAM"} inStock={false}/>
        <ProductCard name = "Iphone 17 Pro Max" price = {200000} description={"A newly launched iphone with every functionality a phone wants"} inStock={true}/>
        <ProductCard name = "Samsung S25" price = {150000} description={"A very high quality camera with good zooming power"} isStock={false}/>
        </>
    )
}

export default Products;