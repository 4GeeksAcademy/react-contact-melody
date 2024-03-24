import React from "react";

export const Card = (props) => {
	return (
		
              <div className="container-fluid col-10">
              <div className="card mb-3" >
            <div className="row">
              <div className="col-3">
                <img src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" className="img-fluid" />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title">{props.fullName}</h5>
                  <p className="card-text">{props.postalAddress}</p>
                  <p className="card-text">{props.phoneNumber}</p>
                  <p className="card-text">{props.emailAddress}</p>
                </div>
              </div>
              <div className="col-md-1">
                  <p className="card-text"></p>
              </div>
            </div>
          </div>
          </div>
            );

            
          };


/* import { Link } from "react-router-dom";
import profile-picture from "../../img/profile-picture.webp";

export const Cards = () => (
	<p>hola</p>
);
 */

/* Card.propTypes = {
  name: PropTypes.string
  address: PropTypes.string
  phone: PropTypes.string
  mail: PropTypes.string

}; */