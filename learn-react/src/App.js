import './App.css';

/*
If you have module.css
import styles from './App.module.css'
<h1 className={styles.name}>React</h1>
*/

const Render = 18;
const isGreen = true;
function App() {
  return (
    <div className='App'>
      {Render >= 20 ? "Cond1" : 'Condn2'}
      <h1 style={{ color: isGreen ? "green" : "blue" }}>React</h1> {/* Black & White Theme Impl */}
    </div>
  );
}

export default App;