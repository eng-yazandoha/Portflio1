

export default function Footer() {
  return (
    <footer className="footer py-4">
        <div className="container">
            <div className="row d-flex text-center">
            <div className="col-md-4 my-3">
                <p className="text-black mb-0">&copy;2018 Tarik. All Rights Reserved.</p>
            </div>
            <div className="col-md-4 my-3">
                <a href="#">
                <img src="./src/assets/img/logo.png" className="" alt=""/>
                </a>
            </div>
            <div className="col-md-4 my-3">
                <p className="text-black mb-0">Made By <span className="text-danger">Tarikeamin!</span></p>
            </div>
            </div>
        </div>
    </footer>
  )
}
