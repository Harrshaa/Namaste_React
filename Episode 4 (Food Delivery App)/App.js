import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -search
 * -RestaurentContainer
 * -Restaurent Card
 * Footer
 * -copyright
 * -Links
 * -Address
 * -Contact
 */
 const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://www.shutterstock.com/image-vector/food-delivery-logo-template-design-260nw-759961531.jpg' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
 }

 const RestaurentCard=(props)=>{
    return(
        <div className='res-card'>
             <img className='res-logo' src='https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg' ></img>
             <h3>{props.resName}</h3>
             <h4>{props.cuisine}</h4>
             <h4>4.4 Stars</h4>
             <h4>40 Minutes</h4>
        </div>
    )

 }

 const Body =()=>{
    return(
         <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                <RestaurentCard resName="Meghana Foods" cuisine="Biryani,North Indian,Asian" />
                <RestaurentCard resName="KFC" cuisine="Biryani,Continental,American"/>
                
            </div>

         </div>
    )
 }

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body />
            
           
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);