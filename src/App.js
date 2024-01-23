import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { GlobalStyles, lightTheme } from './styles'

// Pages
import HomePage from './pages/HomePage/index'
import CreatePage from './pages/CreatePage/index'
import MarketPage from './pages/MarketPage/index'
import MyPage from './pages/MyPage/index'
import NotFound from './pages/NotFound/index'
import PageLayout from './components/PageLayout'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={lightTheme}>
        <Helmet>
          <title>Exodus, my portfolio website | clone NFT market project</title>
        </Helmet>
        <GlobalStyles />

        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path={'/users/:username'} element={<MyPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/create" element={<CreatePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
