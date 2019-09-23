Ext.define('ModernTunesMyApp.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',
    requires: [
        'ModernTunesMyApp.view.main.MainViewController',
        'ModernTunesMyApp.view.main.MainViewModel',
        'ModernTunesMyApp.view.TunesView'
    ],
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel'
    },
    items: [
        {
            title: 'Thumbnail',
            listeners: {
                select: 'onThumbS'
            },
            xtype: 'tunesview',
            bind: {
                store: '{tunes}'
            }
        },
        {
            title: 'Grid',
            xtype: 'tunesgrid',
            bind: {
                store: '{tunes}'
            }
        }
    ],
    tabBarPosition: 'bottom'
})
