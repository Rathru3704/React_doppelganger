import React, { Component } from 'react';

class ErrorBoundary extends Component {  // Error Boundary is the new feature for React 16 or higher version
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters: error and info
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <h1>An Error Occurred!!!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;