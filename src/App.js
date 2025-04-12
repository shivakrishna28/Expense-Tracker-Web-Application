import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
  });

  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense))
    );
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      (filterCategory === 'All' || expense.category === filterCategory) &&
      (expense.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expense.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseSummary expenses={expenses} />
      <div className="controls">
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        updateExpense={updateExpense}
      />
    </div>
  );
};

export default App;

