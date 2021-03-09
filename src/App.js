import classes from './App.module.css';
import Preview from '../src/components/preview/preview'
import Editor from '../src/components/editor/editor'
import React, { useState,useEffect } from 'react'


function App() {
  const [isActive, setActive] = useState(false);
  const [isInActive, setInActive] = useState(true);

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
          onClick={toggleActive}>Preview</span>
      </div>
    </div>
  );
}

export default App;
