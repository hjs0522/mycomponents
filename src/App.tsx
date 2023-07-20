import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import InfinityScroll from './fetch/InfinityScroll';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <InfinityScroll></InfinityScroll>
      </QueryClientProvider>
    </div>
  );
}

export default App;
