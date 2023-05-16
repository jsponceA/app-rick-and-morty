import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getResidents } from "../services/rickAndMorty";
import { addClassStatus } from "../utils/helpers";
import Loader from "../components/Loader";

const ResidentInfo = ({ urlResidents }) => {
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const arrIds = urlResidents.map((url) => url.split("/").pop());
  const comaIds = arrIds.join(",");

  const fetchDataResidents = async () => {
    try {
      setIsLoading(true);
      const responseResidents = await getResidents(comaIds);
      if (arrIds.length >= 2) {
        setResidents(responseResidents);
      } else if (arrIds.length === 1) {
        setResidents([...[], responseResidents]);
      } else {
        setResidents([]);
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataResidents();
  }, [urlResidents]);

  return (
    <>
      {isLoading && <Loader />}
      {isLoading || (
        <div className="content-card-resident">
          {residents.map((resident) => (
            <div key={resident.id} className="card-resident">
              <div className="card-resident--img">
                <img src={resident.image} alt="resident_img" />
                <p>
                  <span
                    className={`circle-status ${addClassStatus(
                      resident.status
                    )}`}
                  ></span>{" "}
                  {resident.status}
                </p>
              </div>
              <div className="card-resident--name">
                <p>{resident.name}</p>
                <hr />
              </div>
              <div className="card-resident--info">
                <p>
                  <span>Species:</span> {resident.species}
                </p>
                <p>
                  <span>Origin:</span> {resident.origin?.name}
                </p>
                <p>
                  <span>Times appear:</span> {resident.episode?.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

ResidentInfo.propTypes = {
  urlResidents: PropTypes.array.isRequired,
};

ResidentInfo.defaultProps = {
  urlResidents: [],
};

export default ResidentInfo;
