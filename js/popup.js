document.addEventListener('DOMContentLoaded', function() {
	var url = 'http://busfinder.oakvilletransit.ca/bustimemobile/proxy?op=getpredictions&stpid=2988';
	httpGetAsync(url, notifySchedule);
});