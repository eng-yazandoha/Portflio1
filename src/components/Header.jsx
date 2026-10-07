

export default function Header() {
  return (
      <div className="header position-relative " id="header">
    <div className="container">
      <div className="header-content position-absolute text-end">
        <h2 className="text-capitalize">hello i'm</h2>
        <h1 className="text-uppercase"><span>a</span>lexis morgan</h1>
        <p>Professional UI/UX Designer</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa-brands fa-behance"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fa-brands fa-google-plus-g"></i></a></li>
        </ul>
      </div>
    </div>

  </div>
  )
}
