import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { themeSettings } from "theme";

import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import EmployeesLiveInBulgaria from "scenes/liveInBulgaria";
import EmployeesInTeam from "scenes/emploueesInTeam";
import Average from "scenes/average";
import OverSixMonths from "scenes/overSixMonths";
import Employees from "scenes/employees";

import Companies from "scenes/companies";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/employees-in-bg' element={<EmployeesLiveInBulgaria />} />
              <Route path='/teams' element={<EmployeesInTeam />} />
              <Route path='/average' element={<Average />} />
              <Route path='/over-six-months' element={<OverSixMonths />} />
              <Route path='/companies' element={<Companies />} />
              <Route path='/employees' element={<Employees />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
