import { Suspense } from "react";
import { CssBaseline } from "@mui/material";

import RouteProgress from "./components/RouteProgress";
import RouterRoot from "./pages/RouterRoot";

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fnpallback={<RouteProgress />}>
        <RouterRoot />
      </Suspense>
    </>
  );
}

export default App;
