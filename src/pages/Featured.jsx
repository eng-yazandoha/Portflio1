import FeatureDataView from "../components/FeatureDataView";
import FeatureItem from "../components/FeatureItem";
import {featuredName} from "../data/FeaturedData";

export default function Featured() {
  return (
      <section className="featured bg-body-tertiary">
    <div className="container">
      <div className="heading ">
        <span className="text-uppercase">portfolio</span>
        <h2 className="">My Featured Work</h2>
      </div>
    </div>
    
    <div className="featured-img d-flex flex-column align-items-center  ">
      <ul className="nav nav-pills mb-3 mt-5 justify-content-center" id="pills-tab" role="tablist">
        {
          featuredName.map((featur)=>(
            <FeatureItem name={featur.viewName} id={featur.id} featurName={featur.name}/>
          ))
        }
      </ul>
      
      <div className="tab-content" id="pills-tabContent">
        {
          featuredName.map((featur)=>(
            <FeatureDataView name={featur.viewName} id={featur.id} featurName={featur.name}/>
          ))
        }
      </div>
    </div>
  </section>
  )
}
