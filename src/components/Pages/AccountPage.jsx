import React, { useState } from 'react'
import AccountForm from '../UI/AccountForm'



export default function AccountPage() {
    const [aborted,setAborted]=useState(false)
  return (
    <div className="justify-content-center align-items-center">
         {!aborted && <AccountForm />}
         <button type="button" className="btn btn-dark" onClick={() => setAborted((prev) => !prev)}>{aborted ? 'Вернуться' : 'Перейти'}
         </button>
     

    </div>
  )
}

