import React from "react";
import MoviesList from "./movies-list/MoviesList";
import ErrorBoundary from "./ErrorBoundary";
import AppLogo from "./AppLogo";

const App = props => {
    return (
      <div>
        <ErrorBoundary>
          <AppLogo />
          <MoviesList />
        </ErrorBoundary>
      </div>
    );
  };

export default App;
