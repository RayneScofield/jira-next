// import { LoginScreen } from "./screens/login";
// import { ProjectListScreen } from "screens/project-list";
// import { TsReactTest } from "./utils/try-use-array";

import { AuthenticatedApp } from "authenticated-app";
import { useAuth } from "context/auth-context";
import React from "react";
import { UnauthenticatedApp } from "unauthenticated-app";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <LoginScreen /> */}
      {/* <TsReactTest /> */}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
