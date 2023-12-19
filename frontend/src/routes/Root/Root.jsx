import { Suspense } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Container } from "@mui/material";

import AppBar from "../../components/AppBar";
import RouteProgress from "../../components/RouteProgress";

export default function Root() {
  const { user } = useLoaderData();

  return (
    <>
      <AppBar user={user} />
      <Container sx={{ marginY: 4 }}>
        <Suspense fallback={<RouteProgress />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
