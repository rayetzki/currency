import React from 'react';
import TextField from '@material-ui/core/TextField';

function DatePicker ({ date, onHandleDate }) {
    return (
        <form noValidate>
           <TextField
             id="date"
             label="Выберите дату"
             type="date"
             onChange={onHandleDate}
             value={date}
             InputLabelProps={{
               shrink: true
             }}
           />
        </form>
     )
} 

export default DatePicker;