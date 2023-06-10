import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/*
  * We used to gt fetched data twice because of StrictMode while using fetch function or axios.
  * To solve this problem, there is something called useQuery from react-query.
  * We first need to wrap all the components with QueryClientProvider.
  * Then we need to create a client using QueryClient, in which we will mention query or mutation and provide
  it to provider so it will unsderstand what to do.
  * refetchOnWindowFocus is a property which will not refetch the data when we switch the tab.
*/


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>You are on wrong page</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;