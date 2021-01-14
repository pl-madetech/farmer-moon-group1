import _ from 'lodash';

type Inventory = {
    corn: number;
}

export const calculateCost = ({corn}: Inventory) => Math.round(corn) * 25