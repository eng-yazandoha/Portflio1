
export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg bg-transparent fixed-top">
    <div className="container-sm">
      <a className="navbar-brand" href="#"><img src="./src/assets/img/logo.png" alt=""/></a>
      <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars "></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link px-0 mx-3 active" aria-current="page" href="#">home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-0 mx-3" href="#">services</a>
          </li>

          <li className="nav-item">
            <a className="nav-link px-0 mx-3" href="#">portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-0 mx-3" href="#">resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-0 mx-3" href="#">contact</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-maincolor rounded-pill text-capitalize" href="#">hire me <span className=""><i className="fa-solid fa-paper-plane"></i></span></a>
          </li>
        </ul>

      </div>
    </div>
  </nav>

  )
}
