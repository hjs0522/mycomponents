import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import InfinityScroll from './fetch/InfinityScroll';
import GetData from './fetch/GetData';
import RefetchData from './fetch/RefetchData';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RefetchData></RefetchData>
      </QueryClientProvider>
    </div>
  );
}

export default App;
