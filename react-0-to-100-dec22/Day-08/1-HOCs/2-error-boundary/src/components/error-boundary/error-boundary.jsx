import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log('getDerivedStateFromError', error)
    return { hasError: true };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    console.log('componentDidCatch', error)
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1>Something went wrong...</h1>
      </div>
    )

  }
}
