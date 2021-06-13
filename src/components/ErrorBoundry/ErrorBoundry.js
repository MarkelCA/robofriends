import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }
    render() {
        const { hasError } = this.state
                const error_message = <p>Error loading the component</p>
                return hasError ?  error_message : this.props.children
    }

}

export default ErrorBoundry
