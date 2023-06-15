import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import './App.css';
import { Data } from './components/Data';
import { productsApi } from './features/apiSlice';

function App() {
  return (
    <ApiProvider api={productsApi}>
      <div className="App">
        <Data />
      </div>
    </ApiProvider>
  );
}


export default App;
