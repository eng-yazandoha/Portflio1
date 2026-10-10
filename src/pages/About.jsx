import AboutInfo from "../components/AboutInfo";

export default function About() {
  return (
      <section className="about">
    <div className="container">
      <div className="row w-80 m-auto">
        <div className="row1 col-md-6">
          <div className="content2 row text-center text-white bg-darkcolor h-100 ">
            <div className="col-md-6 d-flex">
              {/* <span>482</span> */}
              {/* <h3 className="">projects completed</h3> */}
              <AboutInfo number="482" text="projects completed"/>
            </div>
            <div className="col-md-6">
              {/* <span>934</span> */}
              {/* <h3 className="">creative designs</h3> */}
              <AboutInfo number="934" text="creative designs"/>
            </div>
            <div className="col-md-6">
              {/* <span>366</span>
              <h3>happy clients</h3> */}
              <AboutInfo number="366" text="happy clients"/>
            </div>
            <div className="col-md-6">
              {/* <span>7322</span> */}
              {/* <h3>happy clients</h3> */}
              <AboutInfo number="7322" text="happy clients"/>
            </div>
            
          </div>
        </div>
        <div className="row2 col-md-6 bg-maincolor">
          <div className="content1">
            <h3 className="text-uppercase">about</h3>
            <h2>A few words about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ad minim veniam, quis nostrud exercitation ullamco lsix blind smart out burst. Perfectly on furniture dejection determine my plasere lorem ipsum.</p>
            <a className="btn btn-light rounded-pill text-capitalize border-0 pe-4" href="#">
              <span>
                <i className="fa-solid fa-eye"></i>
              </span>my protfolio
            </a>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
