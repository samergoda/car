import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useData } from '../../Context/DataContext';

const Subcategory = ({ match }) => {
  // Extract the category and subcategory slugs from the URL
  const { categorySlug, subcategorySlug } = match.params;
  const categories = useData()
  // Find the category based on the category slug
  const category = categories.find((cat) => cat.link === `/${categorySlug}`);

  if (!category) {
    // Handle case when category is not found
    return <div>Category not found</div>;
  }

  // Find the subcategory based on the subcategory slug
  const subcategory = category.subcategories.find((sub) => sub.link === `/${subcategorySlug}`);

  if (!subcategory) {
    // Handle case when subcategory is not found
    return <div>Subcategory not found</div>;
  }

  return (
    <div>
      <h2>{subcategory.title}</h2>
      <ul>
        {subcategory.products.map((product, index) => (
          <li key={index}>
            <NavLink to={`${category.link}${subcategory.link}${product.link}`}>{product.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subcategory;
