import * as React from 'react';
import BurderBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Layout>
          <BurderBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
