import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: false
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://i66.tinypic.com/m0pro.jpg" />
            <h1>SOS Delfines</h1>
            <p>
              We raise awareness about the problems that cetaceans are facing
              when living in captivity and fighting for the closure of
              dolphinariums. Our objective is to inform and raise awareness of
              the problems that cetaceans such as whales, belugas and dolphins
              suffer when kept in captivity.<br /> <br /> Although their jaw
              looks like a smile, most suffer physically and mentally as are
              unable to carry out their natural behaviors. Cement tanks and
              artificial handling are not supplying their basic needs. The shows
              and interactions with people who are forced to make, are not
              educational and represent an over-exploitation especially at
              certain times of the year.
            </p>
            <h4>
              <a href="#">Read more</a>
            </h4>
          </div>
          <div>
            <img src="http://i68.tinypic.com/2wmnsi8.jpg" />
            <h1>Amics Noguera</h1>
            <p>
              We are a group of volunteers from the region of La Noguera
              (Lleida, Spain) who, after impotently checking how our villages
              and roads were filled with abandoned dogs and cats, decided to
              form an association to welcome them and find a second family that
              loves them and takes care.<br /> <br /> Amigos de la Noguera is a
              non-profit association made up of a group of volunteers who love
              animals. Volunteers strive to give dogs and cats decent living
              conditions. With this campaign we want to finance the conditioning
              of our dogs' homes, as many of their homes are not adequately
              protected against the weather."
            </p>
            <h4>
              <a href="#">Read more</a>
            </h4>
          </div>
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
