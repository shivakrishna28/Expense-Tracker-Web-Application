import React from 'react';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses }) => {
  const currentMonth = new Date().getMonth();
  const monthlyExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() === currentMonth
  );

  const total = monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categories = ['Food', 'Transport', 'Entertainment'];
  const categoryTotals = categories.map((cat) => {
    const total = monthlyExpenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { category: cat, total };
  });

  return (
    <div className="expense-summary">
      <h2>Summary (This Month)</h2>
      <p>Total Spent: ₹{total}</p>
      {categoryTotals.map((item) => (
        <p key={item.category}>
          {item.category}: ₹{item.total}
        </p>
      ))}
    </div>
  );
};

export default ExpenseSummary;
