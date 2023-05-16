import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getLocations } from "../services/rickAndMorty";

const InputFilter = ({ handleSubmitGlobal, setIdLocation }) => {
  const [inputValue, setInputValue] = useState("");
  const [locationsSearch, setLocationsSearch] = useState([]);

  const getDataLocations = async () => {
    try {
      const params = new URLSearchParams();
      params.set("name", inputValue);
      const responseLocations = await getLocations(`?${params.toString()}`);
      setLocationsSearch(responseLocations.results);
    } catch (error) {
      setLocationsSearch([]);
      throw new Error(error);
    }
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGlobal(inputValue);
    setInputValue("");
    setLocationsSearch([]);
  };

  const onSelectedLocation = (obj) => {
    setIdLocation(obj.id);
    setInputValue("");
    setLocationsSearch([]);
  };

  useEffect(() => {
    if (inputValue) {
      getDataLocations();
    } else {
      setLocationsSearch([]);
    }
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit} className="form-filter">
      <div className="form-group">
        <input
          onChange={handleChangeInput}
          value={inputValue}
          type="search"
          placeholder="Type a location Id..."
        />
        <button type="submit">
          Search <i className="bx bx-search"></i>
        </button>
      </div>
      {locationsSearch.length > 0 && (
        <div className="content-serach">
          <ul>
            {locationsSearch.map((loc) => (
              <li onClick={() => onSelectedLocation(loc)} key={loc.id}>
                {loc.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

InputFilter.propTypes = {
  handleSubmitGlobal: PropTypes.func,
  setIdLocation: PropTypes.func.isRequired,
};

export default InputFilter;
