import { AppBar, Box, Container, Stack, Toolbar, Typography } from "@mui/material"
import { Player } from "./Player"
import MenuLink from "./MenuLink"

const pages = [
  {
    id: "1"
  },
  {
    id: "2"
  },
]

type Props = {
  effectId: string
}

export default function Header({ effectId }: Props) {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>
            Tapioca
          </Typography>

          <Stack direction="row" sx={{ flexGrow: 1, justifyContent: "center" }}>
            {pages.map(({ id }) => (
              <MenuLink
                id={id}
                active={id === effectId}
                key={id}
              />
            ))}
          </Stack>
          
          <Box sx={{ width: "56px"}}>{" "}</Box>
        </Toolbar>
        
      </Container>
    </AppBar>
  )
}