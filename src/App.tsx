import * as React from 'react';
import BurderBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={BurderBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
