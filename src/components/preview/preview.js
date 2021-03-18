import React from 'react'
import classes from './preview.module.css'

function Preview(props){
    return(
        <div className={classes.container}>
            Preview
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
            <p>{props.email}</p>
        </div>
    )
}

export default Preview