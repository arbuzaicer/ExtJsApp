Ext.define('ModernTunesMyApp.view.TunesView',{
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    cls: 'tunes-view',
    scrollable: true,
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    itemCls: 'video',
    itemTpl: [
        '<figure>',
        '<div class="thumbnail"><img class="thumbnailImage" src={image}></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
})