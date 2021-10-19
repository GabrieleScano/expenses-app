import './App.css'
import { Expenses } from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Taxes',
      amount: 294.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Rent',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  return (
   <div>
     <Expenses items={expenses}/>
   </div>
  );
}

export default App;
