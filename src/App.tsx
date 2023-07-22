import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import InfinityScroll from './fetch/InfinityScroll';
import GetData from './fetch/GetData';
import RefetchData from './fetch/RefetchData';
import SearchInput from './component/SearchInput';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SearchInput></SearchInput>
      </QueryClientProvider>
    </div>
  );
}

export default App;
