Ext.define('ModernTunesMyApp.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewcontroller',
    requires: [
        'ModernTunesMyApp.view.Preview'
    ],
    onThumbS: function (thumbs, record) {
        this.onShowPreview(record);
    },
    onShowPreview: function (record) {
        if (this.getView().down('video')) {
            return;
        }
        var elem = Ext.create('Ext.panel.Panel',{
            title: '<span class="InfoData">Author: </span>'+record.data['im:artist']['label'],
            width: '70%',
            margin: '0 0 10 0'
        });

        var elem2 = Ext.create('Ext.panel.Panel', {
            title: '<span class="InfoData">Song: </span>'+record.data.title,
            width: '70%'
        });

        var containerConfig = { // parent container of the video and the anchor/link
            xtype: 'container',
            title: record.data.title + ' — ' + record.data.artist,
            style: '{background-color: #ffe764}',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                elem,
                elem2
            ]
        };
        var vid = Ext.create({ // instance of the Preview Dialog class displaying the container
            xtype: 'preview',
            layout: 'fit',
            items: [containerConfig],
        });
        vid.show();
    }
});
