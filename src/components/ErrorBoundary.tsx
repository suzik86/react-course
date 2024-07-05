import React from "react";

interface Props {
    children: React.ReactNode;
    fallback: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props, { hasError: boolean, errorMessage: string }> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
      }
    
      static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
      }
    
      componentDidCatch(error: Error, info: React.ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        //logErrorToMyService(error, info.componentStack);
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
