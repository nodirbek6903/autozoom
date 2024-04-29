export const CarsLabel = ({ text }) => {
  return (
    <label className="vehicle-label">
      <input className="vehicle-inp" type="checkbox" />
      {text}
    </label>
  );
};
