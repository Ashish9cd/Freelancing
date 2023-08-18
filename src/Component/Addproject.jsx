import React from 'react'

const Addproject = () => {
  return (
    
    <div className='container'>
      <div className="my-card">
        <div className="row">
          <div className="col-md-6">
            <div class="card-body p-5">
                 <i class="fa-solid fa-lock fa-3x d-block text-center"></i>   

              <h2 class="text-center my-5 md-5">Add-Project</h2>
              <form>
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" />
        <label className="form-label" htmlFor="form6Example1">
          First name
        </label>
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" />
        <label className="form-label" htmlFor="form6Example2">
          Last name
        </label>
      </div>
    </div>
  </div>
  {/* Text input */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" />
    <label className="form-label" htmlFor="form6Example3">
      Project name
    </label>
  </div>
  {/* Text input */}
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">
      Url Address
    </label>
  </div>
  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="email" id="form6Example5" className="form-control" />
    <label className="form-label" htmlFor="form6Example5">
      Email
    </label>
  </div>
  {/* Number input */}
  <div className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" />
    <label className="form-label" htmlFor="form6Example6">
      Phone
    </label>
  </div>
  {/* Message input */}
  <div className="form-outline mb-4">
    <textarea
      className="form-control"
      id="form6Example7"
      rows={4}
      defaultValue={""}
    />
    <label className="form-label" htmlFor="form6Example7">
      Additional information
    </label>
  </div>
  {/* Checkbox */}
  <div className="form-check d-flex justify-content-center mb-4">
    <input
      className="form-check-input me-2"
      type="checkbox"
      defaultValue=""
      id="form6Example8"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="form6Example8">
      {" "}
      Add New Project?{" "}
    </label>
  </div>
  {/* Submit button */}
  <button type="submit" className="btn btn-primary btn-block mb-4">
    Add-project
  </button>
</form>
</div>
      </div>
      <div className="Add-project  col-md-6">
            <div class="card-body p-5 img-fluid">
                  <i class="fa-solid fa-lock fa-3x d-block text-center"></i>  
                <h2 class="text-center my-5 md-5 text-white"> </h2>
    </div>
    </div>
    </div>
    </div>
    </div>
  
  )
}

export default Addproject
