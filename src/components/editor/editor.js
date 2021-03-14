import React from 'react'
import classes from './editor.module.css'
import Workexp from '../Workexp'


function Editor(props){
    // const [fName, setfName] = useState('');
    // const [lName, setlName] = useState('');
    

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
        //so cool as animation
    }


    let workExp = []

    const addWorkExp = () => {
        workExp.push(<Workexp />)
        console.log(workExp)
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
                    <Workexp />
                            <button onClick={addWorkExp} >+ Work Experience</button>
                </section>
            </div>
        </div>
    )
}

export default Editor