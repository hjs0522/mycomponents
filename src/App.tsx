import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import GetData from './fetch/GetData';
import PostData from './fetch/PostData';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GetData></GetData>
        <PostData></PostData>
      </QueryClientProvider>
    </div>
  );
}

export default App;
