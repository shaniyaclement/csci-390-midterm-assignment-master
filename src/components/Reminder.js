import React, {} from "react";

function Reminder(props) {
    return (
           <span> 
                {/* TODO:  i. Display a reminder
                           ii. It should be displayed as a <span> element if the showCompletedReminders is false
                               OR                        a <s> (strike) element if the showCompletedReminders is true
                    HINT: Remember you passed this information as props in App.js
                */}
                
                { props.showCompletedReminders ? <s>{props.reminder.title}</s> :  <span>{props.reminder.title}</span>}

            </span>
    );
}

export default Reminder;
