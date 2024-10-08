import './index.css';
import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { UserProvider } from './context/UserContext.jsx';
import { BookProvider } from './context/BookContext.jsx';
import { FilterProvider } from './context/FilterContext.jsx';
import { IssuedBooksProvider } from './context/IssuedBooksContext.jsx';
import { RefetchDataProvider } from './context/RefetchDataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RefetchDataProvider>
      <UserProvider>
        <BookProvider>
          <IssuedBooksProvider>
            <FilterProvider>
              <NextUIProvider>
                <App />
              </NextUIProvider>
            </FilterProvider>
          </IssuedBooksProvider>
        </BookProvider>
      </UserProvider>
    </RefetchDataProvider>
  </React.StrictMode>,
)
