import { useState, useEffect } from 'react'
import Calendar from './Calendar'
import view from './view.cjs'
import './App.css'

function App() {
  const [abstinence, setAbstinence] = useState('');
  const [reason, setReason] = useState('');
  const [isDebug, setIsDebug] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    updateWithDate(new Date());
  }, []);

  const handleDateSelect = (date) => {
    updateWithDate(date);
  }

  function updateWithDate(date) {
    const viewState = view.loadPageWithDate(date);
    setAbstinence(viewState.abstinence);
    setReason(viewState.reason);
    setSelectedDate(viewState.selectedDate);
    setIsDebug(viewState.isDebugMode);
  }

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  }

  return (
    <>
      <p>{selectedDate}, é dia de abstinência?</p>
      <h1>{abstinence}</h1>
      <h3>{reason}</h3>

      {/* Debug features */}
      {isDebug && (
        <button 
          className="calendar-toggle-button" 
          onClick={toggleCalendar}
          aria-label="Toggle calendar"
        >
          📅
        </button>
      )}
      
      {isDebug && showCalendar && <Calendar onDateSelect={handleDateSelect} />}
    </>
  )
}

export default App
