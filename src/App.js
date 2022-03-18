import logo from './logo.svg';
import './App.css';
import {useRef} from "react" ; 

function App() { 
   const Myref1 = useRef()
   const Myref2 = useRef()
   const Myref3 = useRef()
  return (
    <div className="App">
      <div>
       <button onClick = {()=>{
             Myref1.current.scrollIntoView({behaviour:"smooth"})
       }}>About</button>
       <button onClick = {()=>{
             Myref2.current.scrollIntoView({behaviour:"smooth"})
       }}>PROJECT</button>
       <button onClick = {()=>{
             Myref3.current.scrollIntoView({behaviour:"smooth"})
       }}>CONTACT</button>
      </div>
      <div  ref = {Myref1} style = {{backgroundColor:"coral",width : "300px" , height : "400px"}}>
        <h3>About</h3>
        <p>Name : shashi kumar</p>
        <p>Age : 29 year</p>
        <p>qualification : Full-stack web developer</p>
        <p>passion : coding</p>
      </div>
      <div ref = {Myref2} style = {{backgroundColor:"teal",width : "300px" , height : "400px"}}>
        <h3>project</h3>
        <p>Clone of zoom car website {"http://3.82.160.93:2345/home"}</p>
        <p>Clone of KFC website {"https://shashikfc.netlify.app/"}</p>
        <p>Clone of Lakme website {"https://lakme-clone.vercel.app/"}</p>
      </div>
      <div ref = {Myref3} style = {{backgroundColor:"yellow",width : "300px" , height : "400px"}}>
        <h3>contact</h3>
        <p>Addresh : patna kankarbagh</p>
        <p>mobile no:- 9953027511</p>
        <p>email : shekhar.shashi735@gmail.com</p>
        <p>linkdin:- shashifw11</p>
      </div>
     
    </div>
  );
}

export default App;
