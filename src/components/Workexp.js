
import React from 'react'

export default function Workexp() {
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
    </div>
    )
}
