import { Button } from "@mui/material";
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };
  constructor(public props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Component error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops! An error occurred.</h1>
          <Button
            variant="contained"
            onClick={() => window.location.replace("/")}
          >
            GO HOME
          </Button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
