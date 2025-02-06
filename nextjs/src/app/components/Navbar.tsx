import { AppBar, IconButton, Toolbar, Typography, Button } from "@mui/material";
import DriverIcon from "@mui/icons-material/DriveEta";
// import Administrador from "../admin/page"

//nova implementacao
import Link from "next/link";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <DriverIcon />
          </IconButton>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              Full Cycle Driver
            </Typography>
          </Link>
        </div>

        <div>
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ marginRight: 2 }}>
              Painel Administrativo
            </Button>
          </Link>

          <Link href="/driver" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ marginRight: 2 }}>
              Iniciar Viagem
            </Button>
          </Link>

          <Link href="/new-route" style={{ textDecoration: 'none' }}>
            <Button color="inherit">
              Traçar Rotas
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
    // <AppBar position="static">
    //   <Toolbar>
    //     <IconButton edge="start" color="inherit" aria-label="menu">
    //       <DriverIcon />
    //     </IconButton>
    //     <Typography variant="h6">Full Cycle Driver</Typography>
    //     <button type="button">Painel Adminstrativo</button>
    //     <button type="button">Iniciar Viagem</button>
    //     <button type="button">Tracar Rotas</button>

    //   </Toolbar>
    // </AppBar>
  );
};
