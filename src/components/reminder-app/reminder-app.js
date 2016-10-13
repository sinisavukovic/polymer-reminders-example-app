/* global Polymer */

(function (Polymer) {
  "use strict";
  Polymer({
    is: 'reminder-app',
    properties: {
      reminders: {
        type: Array,
        value: []
      }
    }
  });
})(Polymer);