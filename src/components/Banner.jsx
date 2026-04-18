import frontImage from '../assets/images/front image.webp'

function Banner() {
  return (
    <section className="hero-section" id="top">
      <button className="slider-arrow left" type="button" aria-label="Previous">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="main-banner">
        <img src={frontImage} alt="Weekend sale banner" />
      </div>

      <button className="slider-arrow right" type="button" aria-label="Next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="slider-dots" aria-label="Slider dots">
        <span></span>
        <span></span>
        <span className="active-dot"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Banner
