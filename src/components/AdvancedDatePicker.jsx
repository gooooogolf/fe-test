import { useState, useEffect, useRef } from 'react';

const AdvancedDatePicker = ({ 
  value, 
  onChange, 
  placeholder = "Select date",
  disabled = false,
  className = "",
  minDate = null,
  maxDate = null,
  format = "YYYY-MM-DD"
}) => {
  const [selectedDate, setSelectedDate] = useState(value || '');
  const [isOpen, setIsOpen] = useState(false);
  const [displayDate, setDisplayDate] = useState('');
  const inputRef = useRef(null);

  // Sync with external value prop
  useEffect(() => {
    setSelectedDate(value || '');
    if (value) {
      setDisplayDate(formatDate(value));
    } else {
      setDisplayDate('');
    }
  }, [value]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setDisplayDate(formatDate(newDate));
    if (onChange) {
      onChange(newDate);
    }
    setIsOpen(false);
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(true);
      if (inputRef.current) {
        inputRef.current.showPicker?.();
      }
    }
  };

  const handleClear = () => {
    setSelectedDate('');
    setDisplayDate('');
    if (onChange) {
      onChange('');
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Display Input */}
      <div className="relative">
        <input
          type="text"
          value={displayDate}
          onClick={handleInputClick}
          readOnly
          disabled={disabled}
          placeholder={placeholder}
          className="w-full px-3 py-2 pr-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer"
        />
        
        {/* Calendar Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-8">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Clear Button */}
        {selectedDate && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-2 hover:text-red-500"
          >
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Hidden Date Input */}
      <input
        ref={inputRef}
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        disabled={disabled}
        min={minDate}
        max={maxDate}
        className="absolute opacity-0 pointer-events-none"
        tabIndex={-1}
      />
    </div>
  );
};

export default AdvancedDatePicker;
