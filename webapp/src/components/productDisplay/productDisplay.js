import React from 'react';
import "./productDisplay.scss";
import { formatCurrency } from "../common/priceFormatter";
import Breadcrumbs from "./../breadcrumbs/breadcrumbs"

class ProductDisplay extends React.Component{
    
    
    render(){
    const {results} = this.props;
    return (
        typeof results !== 'undefined'  && results !== null ?
        <section>
        <Breadcrumbs categories={results.category}></Breadcrumbs>
        <div className="product-detail-page">
          <div>
            <div className="product-detail-top">
              {/* <div className="image-container"> */}
              <img className="image-container" alt={results.title} src={results.picture}></img>
              {/* </div> */}
              <div className="product-detail-actions">
                <div className="product-condition">
                  {results.condition} - {results.sold_quantity} vendidos
                </div>
                <h1 className="product-title">{results.title}</h1>
                <span className="item-price">
                  {formatCurrency(
                    results.price.amount,
                    results.price.currency,
                    "es-AR"
                  )}
                  <span className="item-price-decimals">
                    {`${results.price.decimals !== 0 ? results.price.decimals : '00'} `}
                  </span>
                </span>
                
                <button className="buy-button" aria-label="Comprar">Comprar</button>
              </div>
            </div>
            <div className="product-detail-bottom">
              <p>Descripcion del producto</p>
              <div className="product-description">
                <p>{results.description}</p>
              </div>
            </div>
          </div>
        </div>
        </section> : null
    )}
}

export default ProductDisplay
