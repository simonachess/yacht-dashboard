import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classnames from 'classnames';

import { Navbar, Footer, Sidebar } from './components';
import { Dashboard } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="fixed md:static navbar w-full ">
          <Navbar />
        </div>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-[310px] absolute sidebar">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={classnames(
              'bg-[#002149] min-h-screen w-full px-[50px]',
              activeMenu ? 'ml-[310px]' : 'ml-0',
            )}
          >
            <div>

              <Routes>
                <Route path="/" element={(<Dashboard />)} />
                <Route path="/dashboard" element={(<Dashboard />)} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
