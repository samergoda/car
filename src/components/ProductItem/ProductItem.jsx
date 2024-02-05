import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductItem({item,index,subcategory}) {

    // console.log(subcategory.link)
    // console.log(subcategory.products[index])
  return (
<Link to={`/${index}?cate=${subcategory.link}&id=${subcategory.products[index].id}`} className='text-decoration-none'>


  

    <Card className='col-md-4'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default ProductItem;