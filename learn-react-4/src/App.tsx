import "./App.css";
import { Person, Country } from "./Person";

function App() {
    // Return function with input values
    // const add = (a: number, b: number): number => {}

    return (
        <div className="App">
            <Person
                name="John"
                email="abc"
                age={20}
                isMarried={true}
                friends={["Jake Ball", "Lionel Messi", "Tim Potterhead"]}
                country={Country.India}
            />
        </div>
    );
}

export default App;
