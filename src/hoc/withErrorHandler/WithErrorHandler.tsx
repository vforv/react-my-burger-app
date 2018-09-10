import * as React from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandler = (WrappedComponent: any, axios: any) => {
    return class extends React.Component<any> {
        public state = {
            error: null
        }
        public reqInterceptor: any;
        public resInterceptor: any;

        public componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use((req: any) => {
                this.setState({ error: null });
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use((res: any) => res, (error: any) => {
                this.setState({ error });
            })
        }

        public componentWillUnmount() {
            if (this.reqInterceptor || this.resInterceptor) {
                axios.interceptor.request.eject(this.reqInterceptor);
                axios.interceptor.response.eject(this.resInterceptor);
            }
        }

        public errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        public render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        cancelModel={this.errorConfirmedHandler}
                    >
                        {this.state.error ? (this.state.error as any).message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default WithErrorHandler;