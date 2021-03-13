import React,{useState} from 'react'
import classes from './editor.module.css'

function Editor(props){
    // const [fName, setfName] = useState('');
    // const [lName, setlName] = useState('');
    
    // const [email, setemail] = useState('');

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
    const pushedToPreview = () => {
        //so cool as animation
    }

    return(
        <div className="container">
            <h1 className={classes.heading}>Editor</h1>
            <div className={classes.container}>
                <section className={classes.personalInfo}>
                    <input type="text" 
                        onChange={handleChange} 
                        value={props.firstName}/>
                    <input type="text" 
                        onChange={handleLastName} 
                        value={props.lastName}/>
                    <input type="email" 
                        onChange={handleEmail} 
                        value={props.email}/>
                    <button onClick={pushedToPreview} className={classes.push}>SAVE</button>
                </section>
            </div>
        </div>
    )
}

export default Editor