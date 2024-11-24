// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; // adjust the path to where your TodoList component is

describe('TodoList Component', () => {

  // Test if the component renders correctly
  test('renders the TodoList component', () => {
    render(<TodoList />);

    // Verify the title is rendered
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  });

  // Test adding a new Todo
  test('can add a new todo', () => {
    render(<TodoList />);

    // Assuming you have a form with an input and button to add todos
    const input = screen.getByPlaceholderText(/enter a new todo/i); // adjust the placeholder text
    const addButton = screen.getByText(/add/i);

    // Simulate user typing and clicking the add button
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    // Verify the new todo is rendered
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test toggling a Todo's completion status
  test('can toggle a todo completion', () => {
    render(<TodoList />);

    // Assuming you have a default todo item to toggle
    const todoItem = screen.getByText(/default todo/i); // adjust based on default todos
    fireEvent.click(todoItem);

    // Verify that the todo is marked as completed (you might add a class or text for this)
    expect(todoItem).toHaveClass('completed'); // Assuming you have a 'completed' class for toggled todos
  });

  // Test deleting a Todo
  test('can delete a todo', () => {
    render(<TodoList />);

    // Assuming each todo has a delete button
    const deleteButton = screen.getByText(/delete/i); // adjust based on your delete button text or aria-label
    fireEvent.click(deleteButton);

    // Verify that the todo has been removed from the document
    expect(screen.queryByText(/default todo/i)).toBeNull();
  });

});
