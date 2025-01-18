import React, { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers';
import { Badge } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import './Calendar.css'

const Calendar = ({ reminders }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Function to determine if a date has a reminder
    const isReminder = (date) => {
        return reminders.some(
            (reminderDate) => reminderDate.toDateString() === date.toDateString()
        );
    };

    // Render day with custom styling if it has a reminder
    const renderDay = (day, selectedDates, pickersDayProps) => {
        const hasReminder = isReminder(day);
        return (
            <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={hasReminder ? <EventIcon color="primary" /> : undefined}
            >
                <PickersDay {...pickersDayProps} />
            </Badge>
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="calendar">
                <StaticDatePicker
                    displayStaticWrapperAs='desktop' // Choose how to display the calendar
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderDay={renderDay} // Custom render for days
                    sx={{
                        width: '100%',
                        height: '100%', // Take up the full height of the container
                    }}
                />
            </div>
        </LocalizationProvider>
    );
};

export default Calendar;
