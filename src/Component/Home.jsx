import React from 'react'
import { Form } from 'react-router-dom';

const Home = () => {
  return (
   <div>
   
    <div id="carouselExampleDark " className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active slide1" data-bs-interval={10000}>
      
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item slide2" data-bs-interval={2000}>
      
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item slide3">
      
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <div className="list">
        <div className="row">
          <div className="col ">
          <>
  <header>
    <div className="container text-center">
      
      <p className="display-4 fw-bold text-white mytitle">project
     
      </p>
     
      <input type="text" className="form-control w-75 mx-auto myinput" />
      <button className="btn btn-warning mt-5 mybtn">
        <i className="fa-solid fa-magnifying-glass" /> Search Project
      </button>
    </div>
  </header>
  <div className="container">
    <div className="row">
      <div className="col-md-3 mt-3">
        <div className="card shadow">
          <div style={{ height: 250, overflow: "hidden" }}>
            <img
              className="h-100 m-auto d-block"
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
              alt=""
            />
          </div>
          <div className="card-body">
            <h4 className="text-muted">UX/UI</h4>
            <h3><b>Ux/Ui</b></h3>
            <p className="mt-3">
            </p>
            <h2 className="float-end mt-4"></h2>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary float-end">Buy Project</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-3">
        <div className="card shadow">
          <img
            className="img-fluid"
            src="https://thumbs.dreamstime.com/b/coder-icon-programming-languages-web-development-tre-trendy-flat-style-isolated-blue-background-126014845.jpg"
            alt=""
          />
          <div className="card-body">
            <h4 className="text-muted">Web Devlpoment</h4>
            <h3><b>Web devlopment</b></h3>
            <p className="mt-3">
      
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary float-end">Buy Project</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-4">
        <div className="card shadow">
          <img
            className="img-fluid"
            src="https://thumbs.dreamstime.com/b/seo-23789741.jpg"
            alt=""
          />
          <div className="card-body">
            <h4 className="text-muted">SEO</h4>
            <h3><b>Search Engine Optemization</b></h3>
            <p className="mt-3">
              
           </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary float-end">Buy Project</button>
          </div>
        </div>
      </div>
      <div className="col-md-3 mt-4">
        <div className="card shadow">
          <img
            className="img-fluid"
            src="https://globaliweb.com/wp-content/uploads/2018/07/Cheap-WordPress-Hosting.png"
            alt=""
          
          />
          <div className="card-body">
            <h4 className="text-muted">Wordpress</h4>
            <h3><b>Wordpress</b></h3>
            <p className="mt-3">
              
            </p>
          
          </div>
          <div className="card-footer">
            <button className="btn btn-primary float-end">Buy Project</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</>

          </div>

        </div>
      </div>
    
</div>

  )
}

export default Home;