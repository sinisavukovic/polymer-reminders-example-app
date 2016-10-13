/* global Polymer */

(function (Polymer) {
  "use strict";
  Polymer({
    is: "reminder-item",
    properties: {
      reminder: {
        type: Object,
        value: {
          task: 'Not set',
          completed: false
        }
      },
      completed: {
        type: Boolean,
        value: false
      }
    },
    _onDeleteReminder: function () {
      this.fire('delete-reminder', { reminder: this.reminder });
    }
  });
})(Polymer);