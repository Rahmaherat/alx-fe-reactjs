import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
test('renders the TodoList component correctly with initial todos', () => {
  render(<TodoList />);
  // Check for initial todos
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn Jest')).toBeInTheDocument();
});

  test('Adding Todos', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('Toggling Todos', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('Deleting Todos', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});

