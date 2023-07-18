import React, {ErrorInfo,ReactNode} from "react";

interface Props{
    children:ReactNode;
    fallback:ReactNode;
}

interface State{
    hasError:boolean;
}

class ErrorBoundary extends React.Component<Props,State> {
    constructor(props:Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error:Error, info:ErrorInfo) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      console.log('error: ',error);
      console.log('errorInfo: ',info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.fallback;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;