import React, { useEffect, useState } from "react";
import { getItem } from "../../services/itemService";
import "./productDetails.scss";
import "../searchResults/searchResults.scss";
import ProductDisplay from "../../components/productDisplay/productDisplay";
import WithLoading from "../../components/loaderScreen/spinner"
const ProductDisplayWithLoading = WithLoading(ProductDisplay);

const ProductDetails = ({match, history}) => {
  const [product, setProduct] = useState(null);
  const [hasFinished, sethasFinished] = useState(false);

  useEffect(() => {
    sethasFinished(false);
    getItem(match.params.id)
        .then(({ data }) => {
          sethasFinished(true);
          if (data.err) {
            //Product is not found
            history.push("/");
          } else {
            setProduct(data)
          }
        })
        .catch((err) => {
          //General error catcher
          console.log(err);
        });
  }, [match.params.id]);



    return (
        <section>
          <ProductDisplayWithLoading
            results={product}
            hasFinished={hasFinished}>
          </ProductDisplayWithLoading>
        </section>
    );
}

export default ProductDetails;
