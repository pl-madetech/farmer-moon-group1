import _ from 'lodash';

type Inventory = {
    corn: number;
    goose: number;
}

// TODO
export const calculateCost = ({corn, goose}: Inventory) => 
    (Math.round(corn) * 25) + (Math.round(goose) * 10);

export const isPossibleJourney = ({corn, goose}: Inventory) => {
    if (corn < 1 || goose < 1) {
        return true;
    } else if (corn < 2 && goose < 3) {
        return true;
    } else if (goose < 2 && corn < 3) {
        return true;
    } else {
        return false;
    }
}