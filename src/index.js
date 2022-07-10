import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { people } from "./people";
// React Icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { ImQuotesLeft } from "react-icons/im";

const MainApp = () => {
  const [review, setReview] = useState(1);
  const [isMax, setIsMax] = useState(false);
  const [isMin, setIsMin] = useState(false);
  const reviewRef = useRef(null);
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  const moveRight = () => {
    nextButton.current.style.pointerEvents = "none";
    let reviewContent = reviewRef.current;
    reviewContent.style.transition = "transform 1s,opacity 1s";
    reviewContent.style.transform = "translate(800px,0)";
    reviewContent.style.opacity = "0";
    setTimeout(() => {
      reviewContent.style.transition = "opacity 1s";
      reviewContent.style.transform = "translate(-400px,0)";
      reviewContent.style.transition = "opacity 0.5s";
      reviewContent.style.opacity = "1";
      setTimeout(() => {
        reviewContent.style.transition = "transform 0.7s";
        reviewContent.style.transform = "translate(0,0)";
      }, 10);
    }, 1300);
  };

  const moveLeft = () => {
    nextButton.current.style.pointerEvents = "none";
    let reviewContent = reviewRef.current;
    reviewContent.style.transition = "transform 1s,opacity 1s";
    reviewContent.style.transform = "translate(-800px,0)";
    reviewContent.style.opacity = "0";
    setTimeout(() => {
      reviewContent.style.transition = "opacity 1s";
      reviewContent.style.transform = "translate(400px,0)";
      reviewContent.style.transition = "opacity 0.5s";
      reviewContent.style.opacity = "1";
      setTimeout(() => {
        reviewContent.style.transition = "transform 0.7s";
        reviewContent.style.transform = "translate(0,0)";
      }, 10);
    }, 1300);
  };

  const changeReview = (direction) => {
    if (direction === "right" && isMax === false) {
      moveRight();
      setTimeout(() => {
        setReview(review + 1);
        setTimeout(() => {
          nextButton.current.style.pointerEvents = "all";
        }, 1000);
      }, 500);
    } else if (direction === "right" && isMax === true) {
      moveRight();
      setTimeout(() => {
        setReview(1);
        setTimeout(() => {
          setIsMax(false);
          nextButton.current.style.pointerEvents = "all";
        }, 1000);
      }, 500);
    }
    if (direction === "left" && isMin === false) {
      moveLeft();
      setTimeout(() => {
        setReview(review - 1);
        setTimeout(() => {
          nextButton.current.style.pointerEvents = "all";
        }, 1000);
      }, 500);
    } else if (direction === "left" && isMin === true) {
      moveLeft();
      setTimeout(() => {
        setReview(4);
        setTimeout(() => {
          setIsMin(false);
          nextButton.current.style.pointerEvents = "all";
        }, 1000);
      }, 500);
    }
  };

  useEffect(() => {
    if (review === 4) {
      setIsMax(true);
    } else if (review === 1) {
      setIsMin(true);
    }
  });

  return (
    <>
      {console.log(review)}
      <h1 id='title'>Our Reviews</h1>
      <hr />
      <section>
        <div id='div-container'>
          {/* Prev Button */}
          <button
            id='prev-button'
            onClick={() => changeReview("left")}
            ref={prevButton}
          >
            <GrFormPrevious></GrFormPrevious>
          </button>
          <Review
            img={people[review - 1].img}
            id={people[review - 1].id}
            name={people[review - 1].name}
            role={people[review - 1].role}
            reviewContent={people[review - 1].reviewContent}
            reviewRef={reviewRef}
          ></Review>
          {/* Next Button */}
          <button
            id='next-button'
            onClick={() => changeReview("right")}
            ref={nextButton}
          >
            <GrFormNext></GrFormNext>
          </button>
        </div>
      </section>
    </>
  );
};

const Review = (props) => {
  const { img, name, role, reviewContent, reviewRef } = props;
  return (
    <>
      <div className='review-container' ref={reviewRef}>
        <div id='img-container'>
          <img src={img} alt='' id='photo' />
          {/* Quote */}
          <ImQuotesLeft id='quote-id'></ImQuotesLeft>
        </div>
        <h4 id='name'>{name}</h4>
        <h5 id='role'>{role}</h5>
        <p id='review-content'>{reviewContent}</p>
      </div>
    </>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
