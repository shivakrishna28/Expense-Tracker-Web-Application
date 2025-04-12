import React, { useState } from 'react';
import './ExpenseCard.css';

const ExpenseCard = ({ expense, deleteExpense, updateExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);

  const handleUpdate = () => {
    updateExpense({ ...expense, title, amount: parseFloat(amount) });
    setIsEditing(false);
    alert('Expense updated!');
  };

  return (
    <div className="expense-card">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{expense.title}</h3>
          <p>Amount: ₹{expense.amount}</p>
          <p>Category: {expense.category}</p>
          <p>Date: {expense.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ExpenseCard;