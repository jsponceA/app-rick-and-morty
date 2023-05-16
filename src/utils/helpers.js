const getRandomNumber = (limit) => {
  return Math.floor(Math.random() * limit) + 1;
};

const addClassStatus = (status) => {
  let result = "";
  if (status === "Alive") {
    result = "circle-status-green";
  }
  if (status === "Dead") {
    result = "circle-status-red";
  }
  if (status === "unknown") {
    result = "circle-status-grey";
  }
  return result;
};

export { getRandomNumber, addClassStatus };
