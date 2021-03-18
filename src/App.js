import classes from './App.module.css';
import Preview from '../src/components/preview/preview'
import Editor from '../src/components/editor/editor'
import React, { useState} from 'react'


function App() {
  const [isActive, setActive] = useState(false);
  const [isInActive, setInActive] = useState(true);


  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("Last Name");

  const [email, setemail] = useState("");
  
  const [phone, setphone] = useState("");
  
  const [role, setrole] = useState("");
  // const [workexp, setworkexp] = useState("")


  const toggleActive = () => {
    setActive(!isActive);
    setInActive(!isInActive);
  };

  
  return (
    <div className="App">
      <h1 className={classes.Heading}>
        <div className={classes.Border}>
          CV Builder
        </div>
       </h1>
      <div className={classes.toggleMode}>
        <span 
          className={isInActive? classes.activeMode:classes.editorModeBtn}
          onClick={toggleActive}
        >Editor</span>
        <span 
          className={isActive? classes.activeMode:classes.previewModeBtn}
          onClick={toggleActive}
          >Preview</span>
      </div>
      {!isActive ? <Editor 
                    setfirstName={setfirstName}
                    firstName={firstName}  
                    setlastName={setlastName}
                    lastName={lastName}
                    email={email}
                    setemail={setemail}
                    phone={phone}
                    setphone={setphone} 
                    role={role}
                    setrole={setrole} />
                    :<Preview 
                    firstName={firstName} 
                    lastName={lastName}
                    email={email}
                    />}
    </div>
  );
}

export default App;
