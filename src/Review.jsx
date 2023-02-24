// React Icons
import { ImQuotesLeft } from "react-icons/im";

const Review = ({ img, name, role, reviewContent, reviewRef, pos }) => {
  return (
    <div className={`review-container ${pos}`} ref={reviewRef}>
      <div id='img-container'>
        <img src={img} alt='' id='photo' />
        <ImQuotesLeft id='quote-id' />
      </div>
      <h4 id='name'>{name}</h4>
      <h5 id='role'>{role}</h5>
      <p id='review-content'>{reviewContent}</p>
    </div>
  );
};

export default Review;
