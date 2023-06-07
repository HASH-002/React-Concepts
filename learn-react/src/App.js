import './App.css';
import { UserComponent } from './UserComponent';

const names = ["Jake", "John", "James", "Stephen", "MSD"];

const users = [
  { name: "Jake", age: 21 },
  { name: "John", age: 22 },
  { name: "James", age: 23 },
];

// Exercise Display only gas planet Name
const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];

/*
Map function creates new array changing each element.. 
Imp in React
*/

// function App() {
//   return (
//     <div className='App'>
//       <h1>{names.map((name, key) => {
//         // warnings are annoying we can substitute this with <h1> {name} </h1>
//         return <h1 key={key}> {name} </h1>;
//       })}</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <h1>{users.map((user, key) => {
//         return <UserComponent name={user.name} age={user.age} />;
//       })}</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div className='App'>
      {/* <h1>{planets.map((planet) => {
        return <div> {planet.isGasPlanet ? planet.name : ""} </div>;
      })}</h1> */}

      {/* Return Like this without return keyword (remove {}) */}
      <h1>{planets.map((planet) => <div> {planet.isGasPlanet && planet.name} </div>)}</h1>
    </div>
  );
}

export default App;