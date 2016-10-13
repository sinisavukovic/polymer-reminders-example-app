/* global Polymer */

(function (Polymer) {
  "use strict";
  Polymer({
    is: "reminder-edit",
    properties: {
      reminder: Object
    },
    _openNewReminderModal: function () {
      this.$.reminderDialogDetails.open();
    },
    _closeNewReminderModal: function () {
      this.$.reminderDialogDetails.close();
    }
  });
})(Polymer);