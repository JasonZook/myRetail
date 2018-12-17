import React, {Component} from 'react';

export default class CustomerReviews extends Component {

  render() {

    return (
      <div>
        <div className="mb-3">
          <h2 className="font-one-five">Customer Reviews</h2>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <i className="fas fa-star star-gold font-point-six"></i>
                    <i className="fas fa-star star-gold font-point-six"></i>
                    <i className="fas fa-star star-gold font-point-six"></i>
                    <i className="fas fa-star star-gold font-point-six"></i>
                    <i className="fas fa-star star-gold font-point-six"></i> (25)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="far fa-star font-point-six"></i> (55)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i> (15)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i> (0)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="fas fa-star star-gold font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i> (1)</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i>
                  <i className="far fa-star font-point-six"></i> (0)</a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="text-bold">One Special Avocado</div>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <p className="card-text">
                This is hands down the best Avocado ever made and with a slight modification, it becomes absolutely ridiculous.
                The Avocado looks fantastic & has great taste/texure. I would definitely recommend it!
                <i className="font-point-six ml-2">(bobTheBaker) 12/13/2018</i>
              </p>
              <hr className="mb-2" />
              <div className="text-bold">Gotta Love the Green</div>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <p className="card-text">
                I love these! They are the perfect snack for on-the-go or for that late-day snack craving (usually for a candy bar) at work.
                They are quite filling too so you are not still hungry after eating one.
                <i className="font-point-six ml-2">(teacherForLife) 12/10/2018</i>
              </p>
              <div className="my-3">
               <nav aria-label="Page navigation example">
                 <ul className="pagination">
                   <li className="page-item">
                     <a className="page-link" href="#" aria-label="Previous">
                       <span aria-hidden="true">&laquo;</span>
                       <span className="sr-only">Previous</span>
                     </a>
                   </li>
                   <li className="page-item"><a className="page-link" href="#">1</a></li>
                   <li className="page-item"><a className="page-link" href="#">2</a></li>
                   <li className="page-item"><a className="page-link" href="#">3</a></li>
                   <li className="page-item">
                     <a className="page-link" href="#" aria-label="Next">
                       <span aria-hidden="true">&raquo;</span>
                       <span className="sr-only">Next</span>
                     </a>
                   </li>
                 </ul>
               </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
