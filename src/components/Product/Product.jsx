import React from 'react';
import { useData } from '../../Context/DataContext';
import { useSearchParams } from 'react-router-dom';

const Subcategory = () => {
  const [searchParams]= useSearchParams()
  const category = searchParams.get('cate')
  const id = searchParams.get('id')

console.log(category,id)
  const categories = useData();

// console.log(categories)

  // categories.subcategories &&  categories.subcategories
  // // Extract the category and subcategory slugs from the URL
  // const { categorySlug, subcategorySlug } = match.params;
  // const categories = useData()
  // // Find the category based on the category slug
  // const category = categories.find((cat) => cat.link === `/${categorySlug}`);

  // if (!category) {
  //   // Handle case when category is not found
  //   return <div>Category not found</div>;
  // }

  // // Find the subcategory based on the subcategory slug
  // const subcategory = category.subcategories.find((sub) => sub.link === `/${subcategorySlug}`);

  // if (!subcategory) {
  //   // Handle case when subcategory is not found
  //   return <div>Subcategory not found</div>;
  // }

  return (
    <div>
      <h2>tessttt</h2>
      {/* <h2>{subcategory.title}</h2> */}
  
    </div>
  );
};

export default Subcategory;
