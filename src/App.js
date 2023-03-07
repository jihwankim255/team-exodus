import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import MyPage from "./components/screens/MyPage";
import { ThemeProvider } from "styled-components";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { GlobalStyles, lightTheme } from "./styles";
import { faRebel } from "@fortawesome/free-brands-svg-icons";
import Market from "./components/screens/Market";
import Create from "./components/screens/Create";
import Header from "./components/Header";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={lightTheme}>
        <Helmet>
          <title>Exodus, the next generation of NFT market</title>
        </Helmet>
        <GlobalStyles />

        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={`/users/:username`} element={<MyPage />}></Route>
          <Route path="/market" element={<Market />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;