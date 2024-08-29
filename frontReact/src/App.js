import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Movement from "./scenes/Movement";
import InfoClientes from "./scenes/contacts";
import Form from "./scenes/cad_form";
import Pie from "./scenes/pie";
import FAQ from "./scenes/history";
import Login from "./scenes/login";
import Maintenance from "./scenes/maintenance";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/login" element={<Login />} /> */Inicio*/
              <Route path="/" element={<Dashboard />} /> */Inicio*/
              <Route path="/team" element={<Team />} /> */Clientes*/
              <Route path="/contacts" element={<InfoClientes />} /> */Info Clientes*/
              <Route path="/movement" element={<Movement />} /> --
              <Route path="/cad_form" element={<Form />} /> */Cadastrar clientes*/
              <Route path="/calendar" element={<Calendar />} /> */Calendário*/
              <Route path="/pie" element={<Pie />} />
              <Route path="/history" element={<FAQ />} />
              <Route path="/maintenance" element={<Maintenance />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
