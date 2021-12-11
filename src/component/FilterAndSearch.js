import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

export default function FilterAndSearch({filter, setFilter}) {
   return (
      <div className="d-flex flex-row-reverse my-2 w-40 flex-end">
         <MyInput
         className="form-control w-40"
         placeholder="Search..."
         value={filter.query}
         onChange={e => setFilter({...filter, query: e.target.value})}
         />
         <MySelect
         value={filter.sort}
         onChange={selected => setFilter({...filter, sort: selected})}
         defaultValue="Sorted by"
         options={[
            {value: "title", name:"title"},
            {value: "body", name:"body"}
         ]}
         />
      </div>
   )
}


