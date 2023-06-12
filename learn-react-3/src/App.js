import "./App.css";
import { useCounter } from './useCounter';

// function App() {
//   const client = new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: false,
//       }
//     }
//   });
//   return (
//     <div className="App">
//       <QueryClientProvider client={client}>
//         <Cat />
//       </QueryClientProvider>
//     </div>
//   );
// }

function App() {

  const { count, increase, decrease, setToZero } = useCounter();
  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {count}
    </div>
  );
}
export default App;;