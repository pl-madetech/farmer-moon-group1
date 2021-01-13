import _ from 'lodash';

type Inventory = {
    corn: number;
}

export const calculateCost = ({corn}: Inventory) => Math.floor(corn) * 25