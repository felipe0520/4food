import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import RestaurantDetail from "../RestaurantDetail/index";
import Login from '../Login/Login'
import SignUp from '../../containers/SignUp/SignUp'
import NewAddress from '../../containers/NewAddress/NewAddress'
import SplashScreen from '../SplashScreen/SplashScreen'
import UserEdit from "../UserEdit/UserEdit";
import MyProfile from "../MyProfile/MyProfile";
import FeedPage from '../FeedPage'
import Cart from "../Cart/Cart";

export const routes = {
  feed: "/home",
  RestaurantDetailPage: "/restaurant/detail",
  login: "/login",
  newAddress: "/address/new",
  signUp: "/signup",
  root: "/",
  useredit: "/useredit",
  myprofile: "/myprofile",
  cart: "/cart",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.feed} component={FeedPage} />
        <Route exact path={routes.RestaurantDetailPage} component={RestaurantDetail} />
        <Route exact path={routes.root} component={SplashScreen} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.newAddress} component={NewAddress} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.useredit} component={UserEdit} />
        <Route exact path={routes.myprofile} component={MyProfile} />
        <Route exact path={routes.cart} component={Cart} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
