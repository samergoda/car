import './Footer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useData } from '../../Context/DataContext';
function Footer() {

    const data = useData()
    return <>
          <footer className="bg-body-tertiary text-center text-white">
        
        <div className="container p-4">
      
          <section className="mb-4">
           
            <a data-mdb-ripple-init="" className="btn btn-outline btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faFacebook} /></a>

           
            <a data-mdb-ripple-init="" className="btn btn-outline btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faTwitter} /></a>

            
            <a data-mdb-ripple-init="" className="btn btn-outline btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faGoogle} /></a>

            
            <a data-mdb-ripple-init="" className="btn btn-outline btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faInstagram} /></a>

            
            <a data-mdb-ripple-init="" className="btn btn-outline btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faLinkedin} /></a>

            
            <a data-mdb-ripple-init="" className="btn btn-outline btn-floating m-1" href="#!" role="button"><FontAwesomeIcon icon={faGithub} /></a>
          </section>
          
          <section className="text-white">
            <form action="">
              
              <div className="row d-flex justify-content-center">
                
                <div className="col-auto">
                  <p className="pt-2">
                    <strong className="text-white">Sign up for our newsletter</strong>
                  </p>
                </div>
                

                
                <div className="col-md-5 col-12 text-white">
                 
                  <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                    <input placeholder='Email address' type="email" id="form5Example24" className="form-control"/>
                    
                  <div className="form-notch"><div className="form-notch-leading" ></div><div className="form-notch-middle" ></div><div className="form-notch-trailing"></div></div></div>
                </div>
                

                
                <div className="col-auto text-white">
                  
                  <button type="submit" className="btn btn-outline mb-4 text-white">
                    Subscribe
                  </button>
                </div>
                
              </div>
              
            </form>
          </section>
          

          
          <section className="mb-4 text-white">
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
              repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
              harum corrupti dicta, aliquam sequi voluptate quas.
            </p>
          </section>
          
         
          <section className="">
           
            <div className="row">
              
            {data.map((item) => (
  <div className="col-lg-3 col-sm-6 mt-3 mb-4 mb-md-0 text-start items">
    <a href='#' className="text-uppercase fs-5 fw-medium text-decoration-none">{item.title}</a>
    {item.subcategories ? (
      <ul className="list-unstyled mb-0 ">
        {item.subcategories.map((sub, i) => (
          <li key={i}>
            <a className="text-body text-decoration-none " href="#!">{sub.title}</a>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
))}



              

              
              
              
            </div>
            
          </section>
          
        </div>
        

        
        <div className="text-center p-3" >
          © 2024 Copyright:
          <span className="text-reset fw-bold">Jet Care</span>
        </div>
        
      </footer>  
        </>
    
}

export default Footer
