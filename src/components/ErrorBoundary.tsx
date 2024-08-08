import React from "react";

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  Props,
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error.message);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
