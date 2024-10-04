// src/FinancialDashboard.js

import React, { useState } from 'react';
import axios from 'axios';

const FinancialDashboard = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!income || !expenses || !savings) {
      setError('Please fill in all fields.');
      return;
    }

    if (income < 0 || expenses < 0 || savings < 0) {
      setError('Values must be positive numbers.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/financial-data',
        {
          income: Number(income),
          expenses: Number(expenses),
          savings: Number(savings),
        }
      );

      setAdvice(response.data.advice);
      setError('');
    } catch (err) {
      console.error('Error submitting financial data:', err.response.data);
      setError(
        err.response && err.response.data && err.response.data.error
          ? err.response.data.error
          : 'An error occurred.'
      );
      setAdvice('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Financial Dashboard</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="income" className="form-label">
            Income ($)
          </label>
          <input
            type="number"
            className="form-control"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expenses" className="form-label">
            Expenses ($)
          </label>
          <input
            type="number"
            className="form-control"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="savings" className="form-label">
            Savings ($)
          </label>
          <input
            type="number"
            className="form-control"
            id="savings"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            required
            min="0"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Financial Advice
        </button>
      </form>

      {advice && (
        <div className="mt-4">
          <h4>Financial Advice:</h4>
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
};

export default FinancialDashboard;
