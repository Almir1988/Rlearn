import React from "react";
import './Footer.css';




class Footer extends React.Component{ 


  render()
  {


         return(
         
          <footer id="myFooter">
          <div className="container">
              <div className="row">
                  <div className="col-sm-3">
                      <h2 className="logo"><a href="#"> </a></h2>
                  </div>
                  <div className="col-sm-2">
                      <h5>Get started</h5>
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Sign up</a></li>
                          <li><a href="#">Downloads</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-2">
                      <h5>About us</h5>
                      <ul>
                          <li><a href="#">Company Information</a></li>
                          <li><a href="#">Contact us</a></li>
                          <li><a href="#">Reviews</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-2">
                      <h5>Support</h5>
                      <ul>
                          <li><a href="#">FAQ</a></li>
                          <li><a href="#">Help desk</a></li>
                          <li><a href="#">Forums</a></li>
                      </ul>
                  </div>
                  <div className="col-sm-3">
                      <div className="social-networks">
                          <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                          <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                          <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                      </div>
                  
                  </div>
              </div>
          </div>
          
      </footer>
      
            
  );
}
}   
export default Footer;