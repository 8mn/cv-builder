import React from 'react'

export default function Workexp(props) {
    return (
        <div className="workexp" style={{display:"flex",flexDirection:"column"}}>
        <label htmlFor="">University or School Name</label>
        <input type="text" placeholder="University or school name"/>
        <label htmlFor="">City</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">Degree or Stream</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">Further Descriptions or Achievements</label>
        <input type="text" placeholder=""/>
        <button onClick={props.cancelEduExp} style={{width:"max-content"}}>+ Cancel</button>
    </div>
    )
}
