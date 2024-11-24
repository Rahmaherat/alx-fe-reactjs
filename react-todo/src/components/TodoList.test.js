// src/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    // Verify the title is rendered
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
    // Verify that initial todos are rendered
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/write tests/i)).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add todo/i);

    // Simulate typing a new todo and submitting the form
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    // Verify the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('can toggle a todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    // Click to toggle the completion
    fireEvent.click(todoItem);
    
    // Verify that the todo's text is strikethrough
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle back
    fireEvent.click(todoItem);
    
    // Verify that the strikethrough is removed
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/delete/i)[0];
    
    // Click to delete the first todo
    fireEvent.click(deleteButton);
    
    // Verify the todo is deleted
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
