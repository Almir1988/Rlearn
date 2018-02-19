import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Nav,Navbar,NavItem} from 'react-bootstrap';
import Header from './Header.jsx'
import Conent from './Content.jsx'  
import Footer from './Footer.jsx'


class App extends React.Component{
        render()
       { 
       return(
            
                <div>
                  <Header/>
                  <Conent/>
                  <Footer/>

            </div>
           ); 
       }
}
export default App;
