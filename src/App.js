import useOnlineStatus from "@rehooks/online-status";
import useClippy from "use-clippy";
// import {useMouseAction, useMouseUp, useMouseDown} from "use-mouse-action";
// import useLocalStorage from "@rehooks/local-storage";

function App() {
  const isOnline = useOnlineStatus();

  // const [username, setUsername, deleteUsername] = useLocalStorage("ayoub")
  // const mouseActionProp = useMouseAction( {
  //   onAction: ()=>console.log("mouse clicked")
  // })
  // const mouseDownProp = useMouseAction(()=>console.log("mouse down"))
  // const mouseUpProp = useMouseAction(()=>console.log("mouse up"))

  return (
    <div>
      Network:  {isOnline ? "You are online" : "you are not online"}
    </div>
 
    // <div>
    //   <button {...mouseActionProp}>Mouse action</button>
    //   <button {...mouseDownProp} >Mouse down</button>
    //   <button {...mouseUpProp} >Mouse up</button>
    // </div>

    // <div className="App">
    //   <div style={{display: "flex", fontSize:"26px", justifyContent: "center", alignItems: "center"}}>key: "username" | value {username}</div>
    //   <div>
    //     <button onClick={()=>{setUsername("new name")}}>set username</button>
    //     <button onClick={deleteUsername}>delete username</button>
    //   </div>
    // </div>
    // <div className="App">
    //  <button onClick={() => {alert(`your clipboard contain${clipoard}`)}} >Read my clipboard</button>
    //  <button onClick={() => {setClipoard(Math.random()*100)}} >Copy something new</button>

    // </div>
  );
}

export default App;
