import _ from 'lodash';

type Inventory = {
    corn: number;
    goose: number;
}

export const calculateCost = ({corn, goose}: Inventory) => {
    const cornRound = Math.round(corn);
    const gooseRound = Math.round(goose);
    
    if ((cornRound == 2 && gooseRound == 1) || (cornRound == 1 && gooseRound == 2)) {
        return (cornRound + gooseRound + 1) * 50;
    }
    return (cornRound + gooseRound) * 50;
}

export const isPossibleJourney = ({corn, goose}: Inventory) => {
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
}