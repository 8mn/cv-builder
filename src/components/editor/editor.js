import React,{useState} from 'react'
import classes from './editor.module.css'
import Workexp from '../Workexp'
import Eduexp from '../Educationexp' 

function Editor(props){
    // const [fName, setfName] = useState('');
    // const [lName, setlName] = useState('');
    
    
    const [fieldCount, setfieldCount] = useState(0)
    const [eduExp, seteduExp] = useState(0)

    const handleChange = (e) => {
        e.preventDefault();
        props.setfirstName(e.target.value)
    }

    const handleLastName = (e) => {
        e.preventDefault();
        props.setlastName(e.target.value);
    }
    
    const handleEmail = (e) => {
        e.preventDefault();
        props.setemail(e.target.value);
    }
    const handlephone = (e) => {
        e.preventDefault();
        props.setphone(e.target.value);
    }
    const handlerole = (e) => {
        e.preventDefault();
        props.setrole(e.target.value);
    }
    const pushedToPreview = () => {
        //sick animation
    }


    let workExp = []
    let eduExps = []

    const removeHandler = () => {
        setfieldCount(Math.min(fieldCount - 1, 1))
      }
    for (let i = 0; i < fieldCount; i++) {
    workExp.push(<Workexp cancel={removeHandler}/>);
    }

    const addHandler = () => {
        setfieldCount(fieldCount + 1)
    }
    
    
    // For education experience

    const removeEduExp = () => {
        seteduExp(Math.min(eduExp - 1, 1))
      }
    for (let i = 0; i < eduExp; i++) {
    eduExps.push(<Eduexp cancelEduExp={removeEduExp }/>);
    }

    const addEduExp = () => {
        seteduExp(eduExp + 1)
    }


    return(
        <div className="container">
            <h1 className={classes.heading}>Editor</h1>
            <div className={classes.container}>
                <section className={classes.personalInfo}>
                    <button onClick={pushedToPreview} className={classes.push}>PUSH TO Preview</button>
                    <label htmlFor="">First Name</label>
                    <input type="text" 
                        onChange={handleChange} 
                        value={props.firstName}/>

                    <label htmlFor="">Last Name</label>
                    <input type="text" 
                        onChange={handleLastName} 
                        value={props.lastName}/>

                    <label htmlFor="">email</label>
                    <input type="email" 
                        onChange={handleEmail} 
                        value={props.email}/>

                    <label htmlFor="">phone Number</label>
                    <input type="text" 
                        onChange={handlephone} 
                        value={props.phone}/>

                    <label htmlFor="">Current Role</label>
                        <input type="text" 
                            onChange={handlerole} 
                            value={props.role}/>
                    <hr></hr>
                    {workExp}
                            <button onClick={addHandler} style={{width:"max-content"}}>+ Work Experience</button>
                    {eduExps}
                            <button onClick={addEduExp} style={{width:"max-content"}}>+ Education Experience</button>
                </section>
            </div>
        </div>
    )
}

export default Editor