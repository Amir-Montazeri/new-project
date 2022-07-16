const PrimarySelectInput = (props) => {
  return (
    <div className="form-input-border-select">
      <select {...props} className="form-input primary-text">
        {props.children}
      </select>
    </div>
  );
};
export default PrimarySelectInput;
