import React, { useState } from 'react';

const DatePicker = ({ value, onChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Calculate min and max years (e.g., 100 years ago to current year)
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 100;
  const maxYear = currentYear;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const handleDateSelect = (day) => {
    if (!day) return;
    
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    
    onChange(newDate);
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    setCurrentDate(new Date(year, currentDate.getMonth()));
  };

  const handleMonthChange = (e) => {
    const monthIndex = months.indexOf(e.target.value);
    setCurrentDate(new Date(currentDate.getFullYear(), monthIndex));
  };

  return (
    <div className="relative w-full">
      <div className="text-sm font-medium text-left py-2">
        DOB (DD/MM/YYYY)
      </div>
      <input
        type="text"
        className="w-full md:w-96 border border-slate-300 bg-slate-200 px-2 py-1 md:py-2 rounded"
        value={formatDate(value)}
        onClick={() => setShowCalendar(true)}
        readOnly
        placeholder="DD/MM/YYYY"
      />
      
      {showCalendar && (
        <div className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <select
              value={months[currentDate.getMonth()]}
              onChange={handleMonthChange}
              className="px-2 py-1 border rounded"
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            
            <select
              value={currentDate.getFullYear()}
              onChange={handleYearChange}
              className="px-2 py-1 border rounded"
            >
              {Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-sm font-medium p-2">
                {day}
              </div>
            ))}
            {generateCalendarDays().map((day, index) => (
              <button
                key={index}
                onClick={() => day && handleDateSelect(day)}
                className={`
                  p-2 text-center rounded
                  ${!day ? 'invisible' : 'hover:bg-gray-100'}
                  ${value && day === new Date(value).getDate() &&
                    currentDate.getMonth() === new Date(value).getMonth() &&
                    currentDate.getFullYear() === new Date(value).getFullYear()
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : ''}
                `}
                disabled={!day}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;