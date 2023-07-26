import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import router from './utils/router';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
