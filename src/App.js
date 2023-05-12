import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <container/>
    </>
  );
}



function Container(props){
  return(
    <div>
      {props.children}
    </div>
  );
}
export default App;


