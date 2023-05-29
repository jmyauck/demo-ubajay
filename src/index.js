import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Multifamiliares } from './pages/ViviendasMultifamiliares/ViviendasMultifamiliares'
import { Unifamiliares } from './pages/ViviendasUnifamiliares/ViviendasUnifamiliares'
import { Desarrollo } from './pages/DesarrolloUrbano/DesarrolloUrbano'
import { Obras } from './pages/ObrasCiviles/ObrasCiviles'
import { ModalProvider } from './contexts/background-image.context';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Layout>
          <Routes>
            <Route exact path='/' element={<App />} />
            <Route exact path='/section/viviendas-multifamiliares' element={<Multifamiliares />} />
            <Route exact path='/section/viviendas-unifamiliares' element={<Unifamiliares />} />
            <Route exact path='/section/desarrollo-urbano' element={<Desarrollo />} />
            <Route exact path='/section/obras-civiles' element={<Obras />} />
          </Routes>
        </Layout>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
