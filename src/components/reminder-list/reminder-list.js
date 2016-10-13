/* global Polymer */

(function (Polymer) {
  "use strict";
  Polymer({
    is: "reminder-list",
    properties: {
      reminders: Array
    },
    listeners: {
      'add-reminder': '_addReminder',
      'delete-reminder': '_deleteReminder'
    },
    _addReminder: function (e) {
      var reminder = e.detail.reminder;

      this.unshift('reminders', {
        task: reminder.task,
        description: reminder.description || null,
        dueDate: reminder.dueDate || null,
        completed: false
      });
    },
    _deleteReminder: function (e) {
      var index = this.reminders.indexOf(e.detail.reminder);
      this.splice('reminders', index, 1);
    }
  });
})(Polymer);