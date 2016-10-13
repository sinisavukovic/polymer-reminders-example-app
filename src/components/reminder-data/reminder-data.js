/* global Polymer */

(function (Polymer) {
  "use strict";
  Polymer({
    is: "reminder-data",
    properties: {
      reminders: {
        type: Array,
        value: [],
        notify: true
      }
    },
    defaultReminders: function () {
      this.reminders = [];
    }
  });
})(Polymer);