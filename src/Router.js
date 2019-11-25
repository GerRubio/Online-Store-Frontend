import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route path="/product/:id" component={DetailPage} />
    <Route path="/orders/:id" component={OrdersPage} />
    <Route exact path="/login" component={AuthPage} />
  </Switch>
);

export default Router;
