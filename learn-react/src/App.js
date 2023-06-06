import './App.css';

function App() {
  return (
    <div>
      {/* strings with "" and number with braces ... !!! quotes never goes with { } */}
      <GetNameComponent name="react" email="react@facebook.com" phone={8482935565} />
      <GetNameComponent /> {/*Wont display any info as no props are passed but wont show error too*/}

      <JobComponent name="react" salary={90000} company="Facebook" />
    </div>
  );
}


// React component
// Always return UI stuff
// !!! Must start with capital letter otherwise file wont be compiled
// Properties sent by parent must be perceived as props

/*
Props are perceived as object
const props = {
  name: "react",
  email: "react@facebook.com",
  phone: 8482935565
};
*/

const GetNameComponent = (props) => {
  return (<>
    <h1>{props.name}</h1>
    <h1>{props.email}</h1>
    <h1>{props.phone}</h1>
  </>
  );
};

const JobComponent = (props) => {
  return (<>
    <div>{props.name}</div>
    <div>{props.salary}</div>
    <div>{props.company}</div>
  </>);
};
export default App;