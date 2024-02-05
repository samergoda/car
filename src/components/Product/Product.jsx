import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useData } from "../../Context/DataContext";

const Subcategory = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("cate");
  const id = +searchParams.get("id");
  const categories = useData();
  const [title, setTitle] = useState("");
  // const [image, setImage] = useState('');
  // const [desc, setDesc] = useState('');
  // const [price, setPrice] = useState('');

  useEffect(() => {
    const setProduct = () => {
      categories.forEach((item) => {
        if (item.subcategories) {
          item.subcategories.forEach((subcategory) => {
            if (subcategory.link === category) {
              const product = subcategory.products.find((p) => p.id === id);
              if (product) {
                setTitle(product.name);
                // You can set other variables like img, desc, price here if needed
              }
            }
          });
        }
      });
    };

    setProduct();
  }, [categories, category, id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Subcategory;
