import React from 'react';
import ExpenseCard from './ExpenseCard';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense, updateExpense }) => {
  if (expenses.length === 0) {
    return <p className="empty">No expenses to display</p>;
  }

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          updateExpense={updateExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
