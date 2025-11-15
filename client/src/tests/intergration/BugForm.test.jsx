import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BugForm from '../../components/BugForm';

describe('BugForm Component', () => {
  it('calls onSubmit with correct data when valid', () => {
    const handleSubmit = jest.fn(); // Mock function
    render(<BugForm onSubmit={handleSubmit} />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Bug title' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Bug description' } });

    // Click submit button
    fireEvent.click(screen.getByRole('button', { name: /submit bug/i }));

    // Assert handleSubmit called once with correct data
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      title: 'Bug title',
      description: 'Bug description',
    });
  });
});
