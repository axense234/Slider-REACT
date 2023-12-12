// React
import { useEffect, useState } from "react";
// Data
import { people,AUTO_REVIEWS_DELAY_BETWEEN,AUTO_REVIEWS_DELAY_START } from "./data";
// React Icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// Components
import Review from "./Review";


const Main = () => {
  const [reviewId, setReviewId] = useState(0);
  const [stopAutoReviews, setStopAutoReviews] = useState(false);

  const handlePrevReview = () => {
    setReviewId((prevReviewId) =>
      prevReviewId - 1 < 0 ? people.length - 1 : prevReviewId - 1
    );
  };

  const handleNextReview = () => {
    setReviewId((prevReviewId) =>
      prevReviewId + 1 > people.length - 1 ? 0 : prevReviewId + 1
    );
  };

  useAutoReviews(stopAutoReviews, handleNextReview);
  useResetAutoReviews(stopAutoReviews, setStopAutoReviews);

  return (
    <div className='reviews-container'>
      <div className='reviews-container__title'>
        <h1 id='title'>Our Reviews</h1>
        <hr />
      </div>
      <section className='reviews-container__review'>
        <div className='reviews-container__buttons'>
          <button
            type='button'
            id='prev-button'
            onClick={() => {
              setStopAutoReviews(true);
              handlePrevReview();
            }}
          >
            <GrFormPrevious />
          </button>
          <button
            type='button'
            id='next-button'
            onClick={() => {
              setStopAutoReviews(true);
              handleNextReview();
            }}
          >
            <GrFormNext />
          </button>
        </div>
        <div className='reviews-container__reviews'>
          {people.map((person, personIndex) => {
            let position = "next";

            if (personIndex === reviewId) {
              position = "current";
            } else if (
              personIndex + 1 === reviewId ||
              (personIndex === people.length - 1 && reviewId === 0)
            ) {
              position = "prev";
            }

            return <Review {...person} key={person.id} pos={position} />;
          })}
        </div>
      </section>
    </div>
  );
};

const useAutoReviews = (stopAutoReviews, handleNextReview) => {
  useEffect(() => {
    let timeout;
    let interval;
    if (!stopAutoReviews) {
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          handleNextReview();
        }, AUTO_REVIEWS_DELAY_BETWEEN * 1000);
      }, AUTO_REVIEWS_DELAY_START * 1000);
    }
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [stopAutoReviews, handleNextReview]);
};

const useResetAutoReviews = (stopAutoReviews, setStopAutoReviews) => {
  useEffect(() => {
    let timeout;
    if (stopAutoReviews) {
      timeout = setTimeout(() => {
        setStopAutoReviews(false);
      }, AUTO_REVIEWS_DELAY_START * 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [stopAutoReviews, setStopAutoReviews]);
};

export default Main;
