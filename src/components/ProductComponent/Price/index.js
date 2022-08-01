const Price = () => {
  return (
    <div className="price-container">
      <p>قیمت</p>
      <div>
        <div className="discount-container">
          <p className="discount">3%</p>
          <p className="base-price">8.000.000</p>
        </div>
        <div className="discount-container">
          <p className="discounted-price">7.699.000</p>
          <p className="price-unit">ریال</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
