online = window.navigator.onLine;

if(online){
$("#rss-styled").rss("http://mozilla-tunisia.org/feed/", {
    limit: 10,
    layoutTemplate: '<dl class="">{entries}</dl>',
    entryTemplate: '<dt class="widget-wh"><p><a href="{url}">{title}</a></p>{shortBodyPlain}<p><small><span class="label label-success">[{author}@{date}]</span></small></p></dt>'
}).show();

}
else{
	$("#rss-styled").html('<p>ERROR</p>');
}