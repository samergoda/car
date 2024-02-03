import { useSearchParams } from 'react-router-dom';
import { useData } from '../../Context/DataContext';
import { NavLink } from 'react-bootstrap';
import ProductItem from '../ProductItem/ProductItem';

const Category = () => {
  // Extract the category slug from the URL
  // const { category } = match.params;



  const [searchParams]= useSearchParams()
 const category = searchParams.get('cate')
 const indexParent = searchParams.get('ic')
 const indexSub = searchParams.get('is')

//  console.log(category)
  // console.log(category);  // Make sure you see the correct category in the console
  const categories = useData();
console.log(categories[indexParent])
  // Find the category based on the slug
  // const selectedCategory = categories.find((cat) => cat.link === `/${category}`);
// console.log(selectedCategory)
  if (!categories) {
    // Handle case when category is not found
    return <div className='text-center'>Category not found</div>;
  }

  const subcategory = categories[indexParent].subcategories[indexSub];
console.log(subcategory)
  return (
    <div className='text-center'>
      <h2>{subcategory.title}</h2>
      {/* <p>{subcategory.image}</p> */}
      {/* Render other properties as needed */}
         <div className='container'>
         <div className='row  gap-4'>
      {subcategory.products.map((item)=>(
        <ProductItem item={item} />
        ))}
        </div>
        </div>
    </div>
  );
  
  
    
};

export default Category;
