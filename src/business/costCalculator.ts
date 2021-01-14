import _ from "lodash";

type Inventory = {
  corn: number;
  goose: number;
};

const journey1Corn = 'Trip1: take corn across\nTrip2: come home after market';
const journey2Goose = "Trip1: take goose across\nTrip2: come home after market";
const journey1Corn1Goose =
  "Trip1: take either goose or corn across\nTrip2: come back alone\nTrip3: take either goose or corn across\nTrip4: come home after market";
const journey2Corn1Goose =
  "Trip1: take goose across\nTrip2: come back alone\nTrip3: take corn across\nTrip4: come back with goose\nTrip5: take corn across\nTrip6: come back alone\nTrip7: take goose across\nTrip8: come home after market";
const journey1Corn2Goose =
  "Trip1: take corn across\nTrip2: come back alone\nTrip3: take goose across\nTrip4: come back with corn\nTrip5: take goose across\nTrip6: come back alone\nTrip7: take corn across\nTrip8: come home after market";
const journeyMultiCorn = "Take corn one bag at a time\nCome home after market\n";
const journeyMultiGoose = "Take one goose at a time\nCome home after market\n";

export const calculateCost = ({ corn, goose }: Inventory) => {
  const cornRound = Math.round(corn);
  const gooseRound = Math.round(goose);

  if ((cornRound == 2 && gooseRound == 1) || (cornRound == 1 && gooseRound == 2)) {
    return (cornRound + gooseRound + 1) * 50;
  }
  return (cornRound + gooseRound) * 50;
};

export const journeySteps = ({ corn, goose }: Inventory) => {
  let cornRound = Math.round(corn);
  let gooseRound = Math.round(goose);

  if (cornRound == 2 && gooseRound == 1) {
    return journey2Corn1Goose;
  } else if (cornRound == 1 && gooseRound == 2) {
    return journey1Corn2Goose;
  } else if (cornRound == 1 && gooseRound == 1) {
    return journey1Corn1Goose;
  } else if (cornRound == 1 && gooseRound == 0) {
    return journey1Corn;
  } else if (cornRound == 0 && gooseRound == 1) {
    return journey2Goose;
  } else if (cornRound > 1 && gooseRound == 0) {
    return journeyMultiCorn;
  } else if (gooseRound > 1 && cornRound == 0) {
    return journeyMultiGoose;
  }
};

export const isPossibleJourney = ({ corn, goose }: Inventory) => {
  const cornRound = Math.round(corn);
  const gooseRound = Math.round(goose);

  if (cornRound == 0 || gooseRound == 0) {
    return true;
  } else if (cornRound < 2 && gooseRound < 3) {
    return true;
  } else if (gooseRound < 2 && cornRound < 3) {
    return true;
  } else {
    return false;
  }
};
