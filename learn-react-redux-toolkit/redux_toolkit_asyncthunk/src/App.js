import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from './features/gitUserSlice';

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state.app);
    return state.app;
  });

  if (data.loading) {
    return <h1>isLoading...</h1>;
  }
  if ((data?.error) !== null) {
    console.log("here");
    return (<h1>{data.error}</h1>);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => { dispatch(getAllData()); }}>Get Github User</button>
      {data.users.map((user) => {
        return <li key={user.id}>{user.login}</li>;
      })}
    </div>
  );
}

export default App;
