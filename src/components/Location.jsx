import PropTypes from "prop-types";

const Location = ({ location }) => {
  return (
    <div className="card-location">
      <div className="card-location-item ">
        <p className="card-location-item-title">Nombre:</p>
        <p>{location.name}</p>
      </div>
      <div className="card-location-item">
        <p className="card-location-item-title">Tipo</p>
        <p>{location.type}</p>
      </div>
      <div className="card-location-item">
        <p className="card-location-item-title">Dimensión:</p>
        <p>{location.dimension}</p>
      </div>
      <div className="card-location-item">
        <p className="card-location-item-title">Población:</p>
        <p>{location.residents?.length}</p>
      </div>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Location;
