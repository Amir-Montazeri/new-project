import "index.css";
const ImageComponent = () => {
  return (
    <div className="img-container">
      <div className="primary-img-container">
        <img
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt=""
        />
      </div>
      <div className="img-slider">
        <img
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt=""
        />
        <img
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt=""
        />
        <img
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default ImageComponent;
