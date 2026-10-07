

export default function MapView() {
  return (
    <section className="map bg-6" id="map">
      <iframe className="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54191.517291877906!2d35.247082062389886!3d31.907417067849988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d54cda2d58d1%3A0xbf6d4d17cc8b2c76!2z2LHYp9mFINin2YTZhNmH!5e0!3m2!1sar!2s!4v1694839079435!5m2!1sar!2s" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container ">
        <div className="row bg-1">
          <div className="col-md-4 py-3 d-flex align-items-center">
            <span className="icons ms-4">
              <a href="#">
                <i className="fa-solid fa-phone-flip"></i>
              </a>
            </span>
            <div className="desc ms-3">
              <h3>Contact Number</h3>
              <p className="mb-0">+345-3909655627</p>
            </div>
          </div>
          <div className="col-md-4 py-3 d-flex align-items-center">
            <span className="icons ms-4">
              <a href="#">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </span>
            <div className="desc ms-3">
              <h3>Email Address</h3>
              <p className="mb-0">+2390-875-5664</p>
            </div>
          </div>
          <div className="col-md-4 py-3 d-flex align-items-center">
            <span className="icons ms-4">
              <a href="#">
                <i className="fa-solid fa-location-dot"></i>
              </a>
            </span>
            <div className="desc ms-3">
              <h3>Location</h3>
              <p className="mb-0">Buffalo Street,#205, Northwest-3087</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
