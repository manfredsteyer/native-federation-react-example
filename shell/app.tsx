import React from "react";
import { loadRemoteModule } from "@softarc/native-federation";

const reactAppMod = loadRemoteModule({
  remoteName: "mfe1",
  exposedModule: "./component",
});

const RemoteComponent = React.lazy(() =>
  reactAppMod.then((c) => {
    return { default: c.App };
  })
);

export function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Flights</a>
        </li>
      </ul>

      <React.Suspense fallback="loading federated">
        <RemoteComponent />
      </React.Suspense>
    </div>
  );
}
