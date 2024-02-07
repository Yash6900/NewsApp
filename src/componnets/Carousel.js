import React from "react";

const Carousel = (props) => {
  let { slides } = props;
  if (!slides || slides.length === 0) {
    // If slides is undefined or empty, you can return a default or loading state
    return <p>No slides available</p>;
  }
  return (
    <div className="container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""} `}
              key={index}
              data-bs-interval="5000"
            >
              <img
                src={slide.image || "./blank-image.png"}
                className="d-block w-100 blur-image"
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption text-dark bg-blur p-4">
              <a href={slide.Url} target="/"><h5>{slide.title}</h5></a>
                <p>
                  {slide.description ||
                    "Some representative placeholder content for the slide."}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
