import { test, expect, jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import ListItem from '../ListItem';
import { v4 as uuidv4 } from "uuid";
//import { list, tickItem } from '../../App';

// name={listItem.name}
// completed={listItem.completed}
// key={listItem.id}
// tickItem={() => tickItem(listItem.id)}



test('ListDisplay test', async () => {
    const props = {
        name: "apple",
        completed: false,
        tickItem: jest.fn()
    }
    
    render(<ListItem name={props.name} completed={props.completed} tickItem={jest.fn()}/>);
    
    const name = screen.getByText(/apple/i)
    // expect(name).toContain('apple')
    // const completed = screen.getByText('untickedItem')
    
    // expect(li).toBeInTheDocument()
    expect(name).toHaveTextContent('apple')
    // expect(completed).toBeInTheDocument()
    // expect(props.tickItem).toHaveBeenCalled()

});