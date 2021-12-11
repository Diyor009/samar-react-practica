import React from 'react'

export default function MySelect({options, defaultValue, onChange, value}) {
   return (
      <select
         value={value}
         onChange={e => onChange(e.target.value)}
         className="form-select form-control w-40"         
         >
         <option disabled value=""> {defaultValue}</option>
         {options.map(opt => (
            <option key={opt.value} value={opt.value}>
               {opt.name}
            </option>
         ))}
      </select>
   )
}


