import { Box, SxProps, Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = { children: ReactNode, sx: SxProps, variant?: "h1" | "h3" | "body1"}

function Effect2Text({ children, sx, variant = "h1" }: Props) {
  return (
    <Box sx={{
      position: "relative",
      ...sx
    }}>
      <Typography variant={variant}>
        {children}
      </Typography>
      <Typography variant={variant} sx={{ 
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        transform: "scale(var(--text-scale))",
        willChange: "transform",
        opacity: 0.5,
        color: theme => theme.palette.primary.main,
      }}>
        {children}
      </Typography>
    </Box>
  )
}
export default Effect2Text