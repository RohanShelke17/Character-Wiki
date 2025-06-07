import React from 'react'

const Input = ({total,name , setID}) => {
  
  return (
    <div className='input-group mb-3'>
      <select 
      onChange={e=>setID(e.target.value)}
      id={name} className="form-select">
        <option value={1} selected>Choose...</option>

        {[...Array(total).keys()].map(x=>{
          return(
            <option value={x+1}>{name} - {x+1}</option>
          )
        })}

        
      </select>
    </div>
  )
}

export default Input