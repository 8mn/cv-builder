import React from 'react'

export default function Workexp(props) {

    // const workObj = [
    //     {
    //         Company:'',
    //         from:'',
    //         to:'',
    //         role:'',
    //         description:''
    //     }
    // ]

    return (
        <div className="workexp" style={{display:"flex",flexDirection:"column"}}>
        <label htmlFor="">Work Experience</label>
        <input type="text" placeholder="Company name"/>
        <label htmlFor="">From</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">To</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">Role</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">Further Descriptions or Achievements</label>
        <input type="text" placeholder=""/>
        <button onClick={props.cancel} style={{width:"max-content"}}>+ Cancel</button>
    </div>
    )
}


// https://stackoverflow.com/questions/47007825/how-to-display-a-component-inside-a-component-multiple-times-on-click-in-reactjs