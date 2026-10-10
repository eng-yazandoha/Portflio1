
export default function ItemBoxFeatur({title,text,img}) {
  return (
    <>
              <div className="col-md-4 mb-3">
                <div className="parent-above">
                  <div className="overlay">
                    <span><i className="fa-solid fa-magnifying-glass-plus"></i></span>
                  </div>
                  <img src={img} alt="" className=""/>
                  <div className="above px-4">
                    <div className="above-content mt-2">
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                    <div className="above-icon ">
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>        
    </>
  )
}
