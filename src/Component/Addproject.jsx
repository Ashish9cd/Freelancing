import React from 'react'

const Addproject = () => {
  return (
    <div>
      <form action="/submit" method="post">
  <label htmlFor="name">Project Name:</label>
  <input type="text" id="name" name="name" required="" />
  <br />
  <br />
  <label htmlFor="email">Project Title:</label>
  <input type="email" id="email" name="email" required="" />
  <br />
  <br />
  <label htmlFor="message">Message:</label>
  <br />
  <textarea
    id="message"
    name="message"
    rows={4}
    cols={50}
    required=""
    defaultValue={""}
  />
  <br />
  <br />
  <input type="submit" defaultValue="Submit" />
</form>

    </div>
  )
}

export default Addproject
