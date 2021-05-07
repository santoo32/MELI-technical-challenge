import React, { useEffect, useState } from "react";
import "./searchResults.scss";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getItems } from "../../services/itemService";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../components/common/priceFormatter";
import logoFreeShipp from "../../assets/ic_shipping.png";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import NoResults from "../noResults/noResults";
 

//The main role of this component is just to render all of the items
// that are passed into it via props.
const SearchResults = ({ itemsList = [] }) => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [hasFinished, sethasFinished] = useState(false);

  const { search } = useLocation();
  const values = queryString.parse(search);

  useEffect(() => {
    getItems(values.search).then(({ data }) => {
      setResults(data.item);
      setCategories(data.categories);
      sethasFinished(true);
    });
  }, [values.search]);

  return (
    <>
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
        }) : hasFinished ? <NoResults></NoResults> : null}
      </div>
      </section>
    </>
  );
};

export default SearchResults;
