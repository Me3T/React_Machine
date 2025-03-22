const Interest = ({ data, setData }) => {
  const { interest } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Anime"
            checked={interest.includes("Anime")}
            onChange={handleChange}
          />
          Anime
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Cricket"
            checked={interest.includes("Cricket")}
            onChange={handleChange}
          />
          Cricket
        </label>
      </div>
    </div>
  );
};

export default Interest;
