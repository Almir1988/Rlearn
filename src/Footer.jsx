import React from "react";
import { Grid, Nav, NavItem,footer } from 'react-bootstrap';
class Footer extends React.Component{ 


  render()
  {


         return(

          <footer>
          <Grid>
            <div className="text-center small copyright">
              © RT 2018
            </div>
          </Grid>
        </footer>
            
  );
}
}   
export default Footer;