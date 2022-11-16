import { test, expect, jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import ListDisplay from '../ListDisplay';
import { v4 as uuidv4 } from "uuid";
//import { list, tickItem } from '../../App';

test('ListDisplay test', async () => {
    let shoppingList = [
        { name: "Oranges", completed: false, id: uuidv4() },
        { name: "Tea", completed: false, id: uuidv4() },
        { name: "Aubergine", completed: false, id: uuidv4() },
        { name: "Biscuits", completed: false, id: uuidv4() },
        { name: "Dishwasher Tablets", completed: false, id: uuidv4() },
      ];

    const props = {
        list: shoppingList,
        tickItem: jest.fn()
    }
    render(<ListDisplay list={props.list} tickItem={props.tickItem}/>);
    screen.debug();
});

