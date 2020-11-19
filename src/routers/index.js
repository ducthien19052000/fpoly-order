import React from 'react'
import Main from '../pages/layout/Main'
import MainAdmin from '../pages/layout/MainAdmin'
import Home from '../pages/view/Main/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from '../pages/view/Main/Product';
import FoodDetail from '../pages/view/Main/FoodDetail';

import OAuth2RedirectHandler from '../pages/view/Main/User/OAuth2/OAuth2RedirectHandler';
import Food from '../pages/view/Admin/Food';
import Login from '../pages/view/Admin/Login';
import Customer from '../pages/view/Admin/Customer';
import Checkout from '../pages/view/Main/Checkout';
import Category from '../pages/view/Main/ProductCategory';

const Routers = () => {
    return (
        <Router>
            <Switch>
            <Route path='/admin/login'>
                <Login/>
            </Route>
                <Route path="/admin/:path?/:path?" exact >
               
                    <MainAdmin>
                                <Switch>
                                    
                                    <Route path='/admin/' exact> <Food/></Route>
                                    <Route path='/admin/customer'>
                                        <Customer/>
                                    </Route>
                                    
                                    </Switch>                    
                    </MainAdmin>
                   
                </Route>
                <Route >
                    <Main>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                          
                            <Route path="/product" >
                                <Product/>
                            </Route>
                            <Route path="/food/:id" >
                                <FoodDetail/>
                            </Route>
                            <Route path='/checkout'>
                                <Checkout/>
                            </Route>
                            <Route path='/category/:id'>
                                <Category/>
                            </Route>
                            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
       
    )
}

export default Routers
