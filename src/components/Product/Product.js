import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from "../ProductImage/ProductImage";
import {useState} from 'react';
import ProductForm from "../ProductForm/ProductForm";



const Product = (props) => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary')
    console.log('Name: ' + props.title)
    console.log('Price: ' + getPrice(props.basePrice));
    console.log('Size: ' + currentSize)
    console.log('Color: ' + currentColor)
  }

  const getPrice = () => {
    const foundSize = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + foundSize.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor}/>

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
            handleSubmit={handleSubmit}
            colors={props.colors}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            sizes={props.sizes}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )

};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};


export default Product;