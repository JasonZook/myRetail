import React, {Component} from 'react';
import tab from 'bootstrap'

export default class CustomerReviews extends Component {

  render() {

    return (
      <div>
        <div className="mb-3">
          <h2 className="font-one-five">Customer Reviews</h2>
        </div>
        <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="tab" href="#pills-five" role="tab" aria-controls="pills-home" aria-selected="true">
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i> (25)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab" data-toggle="tab" href="#pills-four" role="tab" aria-controls="pills-profile" aria-selected="false">
            <i className="fas fa-star star-gold font-point-six"></i>
            <i className="fas fa-star star-gold font-point-six"></i>
            <i className="fas fa-star star-gold font-point-six"></i>
            <i className="fas fa-star star-gold font-point-six"></i>
            <i className="far fa-star font-point-six"></i> (55)
          </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="tab" href="#pills-three" role="tab" aria-controls="pills-contact" aria-selected="false">
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i> (15)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="tab" href="#pills-two" role="tab" aria-controls="pills-contact" aria-selected="false">
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i> (15)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="tab" href="#pills-one" role="tab" aria-controls="pills-contact" aria-selected="false">
              <i className="fas fa-star star-gold font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i> (0)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="tab" href="#pills-zero" role="tab" aria-controls="pills-contact" aria-selected="false">
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i>
              <i className="far fa-star font-point-six"></i> (1)
            </a>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-five" role="tabpanel" aria-labelledby="pills-home-tab">
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
          <div className="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-profile-tab">

            <div className="text-bold">Four Star Product</div>
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
            <div className="text-bold">If only i had know sooner</div>
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
          <div className="tab-pane fade" id="pills-three" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div className="text-bold">Not Bad</div>
            <i className="fas fa-star star-gold font-point-six"></i>
            <i className="fas fa-star star-gold font-point-six"></i>
            <i className="fas fa-star star-gold font-point-six"></i>
            <p className="card-text">
              This is hands down the best Avocado ever made and with a slight modification, it becomes absolutely ridiculous.
              The Avocado looks fantastic & has great taste/texure. I would definitely recommend it!
              <i className="font-point-six ml-2">(bobTheBaker) 12/13/2018</i>
            </p>
            <hr className="mb-2" />
            <div className="text-bold">Good and Bad</div>
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
          <div className="tab-pane fade" id="pills-two" role="tabpanel" aria-labelledby="pills-contact-tab">..4.</div>
          <div className="tab-pane fade" id="pills-one" role="tabpanel" aria-labelledby="pills-contact-tab">..4.</div>
          <div className="tab-pane fade" id="pills-zero" role="tabpanel" aria-labelledby="pills-contact-tab">..4.</div>
        </div>

      </div>
    );
  }
}
