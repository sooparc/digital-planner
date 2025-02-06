import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import NavLinks from "./components/NavLinks";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <Router>
        <NavLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
