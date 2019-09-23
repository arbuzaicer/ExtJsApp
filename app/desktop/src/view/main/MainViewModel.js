Ext.define('ModernTunesMyApp.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainviewmodel',
    requires: [
        'ModernTunesMyApp.model.Tune'
    ],
    stores: {
        tunes: {
            model: 'ModernTunesMyApp.model.Tune',
            autoLoad: true,
            sorters: ['artist', 'title']
        }
    }
});
