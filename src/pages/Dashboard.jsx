import React from 'react'

function Users() {
  return (
    <>
      <div>
        <div style={{ display: 'inline-block' }} >User 1</div>
        <button style={{ display: 'inline-block' }}>Send Button</button>
      </div>
    </>
  )
}

function Dashboard() {
  const count = 50;
  return (
    <>
      <div>
        <div>
          <div>Payment App </div>
          <hr />
        </div>
        <h3>Your Balance ${count} </h3>
      </div>
      <div>
        <h1>Users :</h1>
        <input placeholder='Search users..'></input>
        <br />
        <Users />
      </div>
    </>
  )
}

export default Dashboard