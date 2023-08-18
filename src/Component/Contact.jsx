import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container'>
        <div className="my-card">
          <div className="row">
            <div className="col-md-6">
              <div class="card-body p-5">
                   <i class="fa-solid fa-lock fa-3x d-block text-center"></i>   

                <h2 class="text-center my-5 md-5">Contact</h2>

                <form>
                  <label for="">Name</label>
                  <input class="form-control mb-4 rounded-5" type="Text" />


                  <label for="">Email</label>
                  <input class="form-control mb-4 rounded-5" type="email" />

                  <label for="">Password</label>
                  <input class="form-control mb-4 rounded-5" type="password" />

                  <button class="btn btn-danger w-100 mt-4 rounded-5">Submit</button>
                </form> 
              </div>
            </div>
            <div className="user-contact  col-md-6">
            <div class="card-body p-5">
                  <i class="fa-solid fa-lock fa-3x d-block text-center"></i>  

                <h2 class="text-center my-5 md-5 text-white"> Let's connect</h2>
                <img className='contact-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyoJv4p6KUA533dxCpTskbmr0LH0VKB4weQg&usqp=CAU" alt="" />
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
