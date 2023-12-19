import { CircularProgress, Box } from "@mui/material";

export default function RouteProgress() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBlock: 20 }}>
      <CircularProgress />
    </Box>
  );
}
