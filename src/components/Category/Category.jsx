import { useSearchParams } from 'react-router-dom';
import { useData } from '../../Context/DataContext';
import ProductItem from '../ProductItem/ProductItem';

const Category = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('cate');
  const indexParent = searchParams.get('ic');
  const indexSub = searchParams.get('is');
  const categories = useData();
  console.log(categories)

  if (!categories) {
   
    return <h2 className='text-center'>Category not found</h2>;
  }

  const subcategory = categories[indexParent].subcategories[indexSub];

  return (
    <div className='text-center'>
      <h2>{subcategory.title}</h2>
      {/* <p>{subcategory.image}</p> */}
      {/* Render other properties as needed */}
         <div className='container'>
         <div className='row  gap-4'>
      {subcategory.products.map((item,i)=>(
        <ProductItem item={item} subcategory={subcategory} index={i} key={i}/>
        ))}
        </div>
        </div>
    </div>
  );
  
  
    
};

export default Category;
