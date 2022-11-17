import { test, expect, jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import ListDisplay from '../ListDisplay';



test('ListDisplay test', async () => {
    let shoppingList = [
        { name: "Oranges", completed: false },
        { name: "Tea", completed: false },
        { name: "Aubergine", completed: false },
        { name: "Biscuits", completed: false},
        { name: "Dishwasher Tablets", completed: false}
      ];

    const props = {
        list: shoppingList,
        tickItem: jest.fn()
    }
    render(<ListDisplay list={props.list} tickItem={props.tickItem}/>);
    
  
    const li = screen.getByText('Tea')
    expect(li).toBeInTheDocument()
    expect(li).toHaveClass('untickedItem', {exact: true})
    expect(li).toHaveAttribute("class", "untickedItem")
    // const button = screen.getByRole('button')
    // userEvent.click(li)
    // expect(tickItem).toHaveBeenCalled()
    
});

