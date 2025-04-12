import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      alert('Please fill in all fields');
      return;
    }
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    addExpense(newExpense);
    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
    alert('Expense added!');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;