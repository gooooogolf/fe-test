import { useState } from 'react';

const DatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Select date",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || '');

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default DatePicker;
