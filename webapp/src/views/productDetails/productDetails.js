import React from "react";
import { getItem } from "../../services/itemService";
import { formatCurrency } from "../../components/common/priceFormatter";
import "./productDetails.scss";
import "../searchResults/searchResults.scss"

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { match, history } = this.props;

    if (!match.params.id) {
      history.push("/");
    } else {
      getItem(match.params.id)
        .then(({ data }) => {
          if (data.err) {
            //Product is not found
            history.push("/");
          } else {
            this.setState({ product: data.item });
          }
        })
        .catch((err) => {
          //General error catcher
          console.log(err);
        });
    }
  }

  render() {
    const { product } = this.state;
    const { price } = product;
    return (
      <div className="product-detail-page">
        <div className="product-detail-top">
          {/* <div className="image-container"> */}
          <img className="image-container" src={product.picture}></img>
          {/* </div> */}
          <div className="product-detail-actions">
            <div className="product-condition">
              {product.condition} - {product.sold_quantity} vendidos
            </div>
            <h1 className="product-title">{product.title}</h1>
            <span className="item-price">
            {price ? formatCurrency(price.amount, price.currency, 'es-AR') : null}
            </span>
            <button className="buy-button">Comprar</button>
          </div>
        </div>
        <div className="product-detail-bottom">
          <h3>Descripcion del producto:</h3>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
