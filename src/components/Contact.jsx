
export default function Contact() {
  return (
    <section className="contact py-5 ">
  <div className="container py-5 ">
    <div className="heading">
      <span className="text-uppercase text-white">CONTACT</span>
      <h2 className="text-white">Get in Touch</h2>
    </div>
    <div className="para m-auto ">
      <p className="text-center text-white">My Availability Personal portfolios are used to plan, organize and document education,
        work samples and skills. document education, work samples and skills</p>
    </div>
    <div className="row w-75 m-auto">
      <div className="col-md-6 mb-4 ">
        <input type="text" className="form-control" placeholder="Name" aria-label="First name"/>
      </div>
      <div className="col-md-6 mb-4 ">
        <input type="text" className="form-control" placeholder="Email" aria-label="Last name"/>

      </div>
      <div className="col-md-12 mb-4 ">
        <input type="email" className="form-control" placeholder="Address"/>

      </div>
      <div className="col-md-12 mb-4 ">
        <div className="form-floating">
          <textarea className="form-control" placeholder="" id="floatingTextarea2" style={{ height: '100px' }}/>
          <label className="custom-label" htmlFor="floatingTextarea2">Message</label>
        </div>
      </div>
      
    </div>
  </div>
    </section>
  )
}
