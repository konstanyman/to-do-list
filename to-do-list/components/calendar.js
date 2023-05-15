import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export const CalendarView = () => {
    
    return (
        <div className="Home">
            <div className="TodoWrapper">
            <h1>Calendar</h1>
                <div>
                    <Calendar />
                </div>
            </div>
        </div>
    );
};