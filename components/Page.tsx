"use client"

import { Box, Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import Header from "./Header"
import Effect2Text from "./Effect2Text"

type Props = {
  effectId: string
}

export default function Page({ effectId }: Props) {
  return (
    <>
      <Container>
        <Stack
          sx={{ minHeight: "100vh", justifyContent: "center" }}
        >
          {
            effectId === "1" && (
              <Typography variant="h1" sx={{ 
                mb: 2,
                transform: "scale(var(--text-scale))",
                willChange: "transform",
              }}>
                UNSTOPPABLE OMNICHAIN ECOSYSTEM
              </Typography>
            )
          }
          {
            effectId === "2" && (
              <Effect2Text sx={{ mb: 2 }}>
                UNSTOPPABLE OMNICHAIN ECOSYSTEM
              </Effect2Text>
            )
          }

          <Box
            sx={{
              width: "50vw",
              ml: { xs: "13.8vw", lg: "16.4vw" },
              mb: { xs: "72px", lg: "116px" },
            }}
          >
            {
            effectId === "1" && (
            <Typography variant="h3" sx={{ 
              mb: "0",
              transform: "scale(var(--text-scale))",
              willChange: "transform",
            }}>
              MINT, BORROW, LEND, & LEVERAGE ANYWHERE
            </Typography>
            )}
            {
            effectId === "2" && (
              <Effect2Text variant="h3" sx={{ mb: "0" }}>
                MINT, BORROW, LEND, & LEVERAGE ANYWHERE
              </Effect2Text>
            )}
          </Box>

          <Grid container spacing={2}>
            <Grid xs={8} lg={4} xsOffset={2} lgOffset={4}>
            {
            effectId === "1" && (
              <Typography sx={{
                transform: "scale(var(--text-scale))",
                willChange: "transform",
              }}>
                Through the generalized messaging protocol LayerZero V2, Tapioca defragments liquidity and offers a first of its kind chain agnostic user experience, enabling you to mint, borrow, lend, and leverage in our brand new Omnichain world.
              </Typography>)}

              {
            effectId === "2" && (
              <Effect2Text variant="body1" sx={{ mb: "0" }}>
              Through the generalized messaging protocol LayerZero V2, Tapioca defragments liquidity and offers a first of its kind chain agnostic user experience, enabling you to mint, borrow, lend, and leverage in our brand new Omnichain world.
            </Effect2Text>
            )}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  )
}