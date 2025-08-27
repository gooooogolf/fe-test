import { useState } from 'react';
import './App.css';
import DatePicker from './components/DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center max-w-md w-full px-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello World</h1>
        <p className="text-lg text-gray-700 mb-6">Tailwind CSS is now installed and working!</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date:
          </label>
          <DatePicker 
            value={selectedDate}
            onChange={handleDateChange}
            placeholder="Choose a date"
            className="mb-4"
          />
          {selectedDate && (
            <p className="text-sm text-gray-600">
              Selected: {selectedDate}
            </p>
          )}
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
