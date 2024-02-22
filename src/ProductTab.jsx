import Product from "./Product.jsx";
function ProductTab(){
    return( 
        <>
            <Product title="phone" price={20000}/>
            <Product title="laptop" price={40000}/>
            <Product title="pen" />
        </>
    )
}
export default ProductTab ;

