import EnterButton from "@/components/EnterButton";
import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack component={"main"} sx={{ height: "100vh", placeContent: "center", placeItems: "center" }}>
      <Box sx={{ textAlign: "center"}}>
      <EnterButton />
        <Typography component="p" variant="caption" mt={3}>Audio will be activated.</Typography>
      </Box>
    </Stack>
  );
}
