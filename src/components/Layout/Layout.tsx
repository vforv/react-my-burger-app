import * as React from 'react';
import Aux from '../../hoc/Aux';
import * as css from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from 'src/components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    public state = {
        showSideDrawer: false
    }

    public sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    public sideDrawerOpenHandler = () => {
        this.setState((prevState: any) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    public render() {
        return (
            <Aux>
                <Toolbar open={this.sideDrawerOpenHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}
                />
                <main className={css.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;
