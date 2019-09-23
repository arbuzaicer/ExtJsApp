Ext.define('ModernTunesMyApp.view.GridView', {
    extend: 'Ext.grid.Grid',
    xtype: 'tunesgrid',
    cls: 'tunes-grid',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*'
    ],
    defaults: {
        height: 60
    },
    columns: [
        {
            text: 'Artist',
            dataIndex: 'artist',
            flex: 1
        },
        {
            text: 'Title',
            dataIndex: 'title',
            flex: 2
        },
        {
            text: 'Release Date',
            dataIndex: 'release_date',
            flex: 2
        },
        {
            text: 'Thumbnail',
            dataIndex: 'image',
            tpl: '<div class="grid-image"><img src={image}></div>',
            flex: 2,
            cell: {
                encodeHtml: false
            }
        }
    ]
});