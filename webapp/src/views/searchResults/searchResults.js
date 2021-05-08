import React, { useEffect, useState } from "react";
import "./searchResults.scss";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { getItems } from "../../services/itemService";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import ProductsDisplay from "../../components/productsDisplay/productsDisplay";
import WithLoading from "../../components/loaderScreen/spinner"
const ProductsDisplayWithLoading = WithLoading(ProductsDisplay);


const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [hasFinished, sethasFinished] = useState(false);

  const { search } = useLocation();
  const values = queryString.parse(search);

  useEffect(() => {
    sethasFinished(false);
    getItems(values.search).then(({ data }) => {
      setResults(data.item);
      setCategories(data.categories);
      sethasFinished(true);
    });
  }, [values.search]);

  return (
    <>
      <section>
        <ProductsDisplayWithLoading results={results} categories={categories} hasFinished={hasFinished}>
        </ProductsDisplayWithLoading>
      </section>
    </>
  );
};

export default SearchResults;
