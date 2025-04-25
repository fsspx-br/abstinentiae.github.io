import { useState, useEffect } from 'react';
import './Calendar.css';

function Calendar({ onDateSelect }) {
  const [date, setDate] = useState(new Date());
  const [theme, setTheme] = useState('light');
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Detect system color scheme preference
  useEffect(() => {
    // Initial detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    
    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);
  
  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getMonthName = (date) => {
    return date.toLocaleString('default', { month: 'long' });
  };
  
  const firstDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const handleDateClick = (day) => {
    const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
    setSelectedDate(selectedDate);
    if (onDateSelect) {
      onDateSelect(selectedDate);
    }
  };
  
  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth(date);
    const firstDay = firstDayOfMonth();
    
    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Actual days
    for (let i = 1; i <= totalDays; i++) {
      const isToday = i === new Date().getDate() && 
                      date.getMonth() === new Date().getMonth() && 
                      date.getFullYear() === new Date().getFullYear();
      
      const isSelected = selectedDate && 
                        i === selectedDate.getDate() && 
                        date.getMonth() === selectedDate.getMonth() && 
                        date.getFullYear() === selectedDate.getFullYear();
      
      days.push(
        <div 
          key={i} 
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }
    
    return days;
  };
  
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };
  
  return (
    <div className={`calendar-container ${theme}`}>
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h3>{getMonthName(date)} {date.getFullYear()}</h3>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sáb</div>
      </div>
      <div className="calendar-days">
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar; 