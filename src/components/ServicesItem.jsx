

export default function ServicesItem(props) {
  return (
    <>
        <div className="col-md-3 ">
            <img src={props.ImgSER} alt="" className=""/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </>
  )
}
