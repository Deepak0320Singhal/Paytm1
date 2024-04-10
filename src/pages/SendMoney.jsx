import React from 'react'

function SendMoney() {
  return (
    <>
      <div>
        <div>
          <h1>Send Money</h1>
        </div>
        <div>
          <h1>Friend's Name</h1>
        </div>
        <div>
          <div>Amount (in Rs)</div>
          <br />  
          <input placeholder='Enter amount' />
          <br /><br />
          <button>Initiate Transfer</button>
        </div>
      </div>
    </>
  )
}

export default SendMoney