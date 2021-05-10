import React from 'react'
import { Link } from "react-router-dom";
import { formatCurrency } from "../common/priceFormatter";
import logoFreeShipp from "../../assets/ic_shipping.png";
import NoResults from "../../views/noResults/noResults";
import "./productsDisplay.scss";
import Breadcrumbs from "../breadcrumbs/breadcrumbs"

//The main role of this component is just to render all of the items
// that are passed into it via props.
class ProductsDisplay extends React.Component{

    render() {
        const {results, categories} = this.props;
        return (
          <section>
            <Breadcrumbs categories={categories}></Breadcrumbs>
            <div className="products-list">
            {results.length > 0 ? results.map((item) => {
              return (
                <Link
                  to={`/items/${item.id}`}
                  className="product-item"
                  key={item.id}
                >
                  <div className="image-container">
                    <img
                      className="product-image"
                      alt={item.title}
                      src={item.picture}
                    />
                  </div>
                  <div className="item-details">
                    <div className="top-section">
                      <div className="item-price-block">
                        <div className="item-price">
                          <span className="price">
                            {formatCurrency(
                              item.price.amount,
                              item.price.currency,
                              "es-AR"
                            )}
                          </span>
                        </div>
                        {item.free_shipping && (
                          <img
                            className="free-shipping-icon"
                            alt="Envío gratis"
                            src={logoFreeShipp}
                          />
                        )}
                      </div>
                      <div className="address">{item.address}</div>
                    </div>
                    <div className="item-title">{item.title}</div>
                  </div>
              </Link>
            );
          }) : <NoResults></NoResults>}
        </div> 
        </section>
        )
    }
}

export default ProductsDisplay