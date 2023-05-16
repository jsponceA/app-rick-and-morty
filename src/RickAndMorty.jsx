import { useEffect, useState } from "react";
import Location from "./components/Location";
import InputFilter from "./components/InputFilter";
import ResidentInfo from "./components/ResidentInfo";
import Header from "./components/Header";
import Title from "./components/Title";
import { getLocationById } from "./services/rickAndMorty";
import { getRandomNumber } from "./utils/helpers";
import Loader from "./components/Loader";

const RickAndMorty = () => {
  const [idlocation, setIdLocation] = useState(getRandomNumber(126));
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataLocation = async () => {
    try {
      setIsLoading(true);
      const responseLocation = await getLocationById(idlocation);
      setLocation(responseLocation);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitGlobal = (value) => {
    if (!value) return;
    setIdLocation(value);
  };

  useEffect(() => {
    fetchDataLocation();
  }, [idlocation]);

  return (
    <main className="main-container">
      <Header />
      <Title />
      <InputFilter
        handleSubmitGlobal={handleSubmitGlobal}
        setIdLocation={setIdLocation}
      />
      {isLoading ? <Loader /> : <Location location={location} />}
      <ResidentInfo urlResidents={location.residents} />
    </main>
  );
};

export default RickAndMorty;
