import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import RouteProgress from "./components/RouteProgress";
import router from "./routes/router";

function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<RouteProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
