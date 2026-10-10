import ItemBoxFeatur from "./ItemBoxFeatur";
import { FeatureView } from "../data/FeaturedData";

export default function FeatureDataView({id,featurName,name}) {
  return (
    <>
        <div className={`tab-pane fade ${id === 0 ?"show active":""} trans`} id={`pills-${featurName}`} role="tabpanel" aria-labelledby={`pills-${featurName}-tab`} tabIndex="0">
          <div className="container">
            <div className="row ">
                {
                    id==0?
                        FeatureView.map((featur)=>(
                            <ItemBoxFeatur key={featur.title} title={featur.title} text={featur.text} img={featur.img}/>
                        ))
                    :
                        FeatureView.filter((featur)=>featur.viewName==name).map((featur)=>(
                                <ItemBoxFeatur key={featur.title} title={featur.title} text={featur.text} img={featur.img}/>
                            
                        ))
                }     
            </div>
          </div>
        </div>    
    </>
  )
}
