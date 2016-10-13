/* global Polymer */

(function (Polymer) {
  "use strict";
  Polymer({
    is: "reminder-add",
    _openReminderModal: function () {
      this.$.newReminderDialog.open();
    },
    _onCloseReminderModal: function () {
      this.$.newReminderDialog.close();
    },
    _onAddReminder: function () {
      if (this.$.reminderTask.value) {
        this.fire('add-reminder', { reminder: {
          task: this.$.reminderTask.value,
          description: this.$.reminderDescription.value,
          dueDate: this.$.reminderDate.value
        }});
        this.$.reminderTask.value = null;
        this.$.reminderDescription.value = null;
        this.$.reminderDate.value = null;

        this._onCloseReminderModal();
      } else {
        alert('Task name is required <br /> TODO: add validation')
      }
    }
  });
})(Polymer);