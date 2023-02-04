import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import styles from "./ProductForm.module.scss";

const ProductForm = (props) => {

return (
    <form onSubmit={props.handleSubmit}>
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
        <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
        <Button className={styles.button}>
            <span className="fa fa-shopping-cart"/>
        </Button>
    </form>
);

}

export default ProductForm;