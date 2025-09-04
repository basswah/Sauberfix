import "./Loading.css";

const Loader = () => {
  return (
    <div className="Loading">
      <svg viewBox="25 25 50 50">
        <circle r={20} cy={50} cx={50} />
      </svg>
    </div>
  );
};

export default Loader;
