import React from "react";


import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import shape from "../../../src/img/Testimonial/shape-bg.png";







export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

//   const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"What My Client Say About Me"}
      />

      <section className="Projects-section fade-in" id={props.id || ""}>
       
       <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol> */}

                <div className="carousel-inner">

                    <div className="carousel-item active card">
                        <img className="card-img-top" src="https://www.muycomputerpro.com/wp-content/uploads/2021/09/lenguajes-programacion-populares-2021.jpg" alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>

                    <div className="carousel-item card">
                        <img className="card-img-top" src="https://www.muycomputerpro.com/wp-content/uploads/2021/09/lenguajes-programacion-populares-2021.jpg" alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>

                    <div className="carousel-item card">
                        <img className="card-img-top" src="https://www.muycomputerpro.com/wp-content/uploads/2021/09/lenguajes-programacion-populares-2021.jpg" alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>
                            <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>



                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
       
     

      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
