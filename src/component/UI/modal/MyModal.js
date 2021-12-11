import React from 'react'
import classes from './MyModal.module.css'

export default function MyModal({children, modal, setModal}) {

   const modalClasses = [classes.MyModal]
   if(modal) {
      modalClasses.push(classes.active)
   }


   return (
      <div className={modalClasses.join(' ')} onClick={() => setModal(false)}>
         <div className={classes.MyModalContent} 
               onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

