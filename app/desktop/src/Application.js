Ext.define('ModernTunesMyApp.Application', {
  extend: 'Ext.app.Application',
  name: 'ModernTunesMyApp',
  requires: ['ModernTunesMyApp.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
