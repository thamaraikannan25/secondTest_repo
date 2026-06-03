import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  it('renders email and password inputs', () => {
    render(<Login />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders a login button', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('shows error when email is empty on submit', async () => {
    render(<Login />);
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });

  it('shows error when email format is invalid', async () => {
    render(<Login />);
    await userEvent.type(screen.getByLabelText('Email'), 'notanemail');
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(await screen.findByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('shows error when password is empty on submit', async () => {
    render(<Login />);
    await userEvent.type(screen.getByLabelText('Email'), 'user@example.com');
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  it('shows error when password is too short', async () => {
    render(<Login />);
    await userEvent.type(screen.getByLabelText('Email'), 'user@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'abc');
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(await screen.findByText('Password must be at least 6 characters')).toBeInTheDocument();
  });

  it('calls onLogin with email and password when form is valid', async () => {
    const mockOnLogin = jest.fn().mockResolvedValue(undefined);
    render(<Login onLogin={mockOnLogin} />);
    await userEvent.type(screen.getByLabelText('Email'), 'user@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalledWith({
        email: 'user@example.com',
        password: 'password123',
      });
    });
  });

  it('disables the button while submitting', async () => {
    let resolveLogin;
    const mockOnLogin = jest.fn(() => new Promise((res) => { resolveLogin = res; }));
    render(<Login onLogin={mockOnLogin} />);
    await userEvent.type(screen.getByLabelText('Email'), 'user@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(await screen.findByRole('button', { name: 'Logging in...' })).toBeDisabled();
    resolveLogin();
  });

  it('does not call onLogin when there are validation errors', async () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(mockOnLogin).not.toHaveBeenCalled();
  });
});
