import "./Product.css";
import Title from "./Title";
function Product({title,price =5}){
   
    return (
        <div className="Product">
            <h2>{title}</h2>
            <h4>Price : {price}</h4>
        </div>
    );
}
export default Product;