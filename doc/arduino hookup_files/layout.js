(function(){



Meteor.startup(function() {
		var js, id = 'addthis-wjs', fjs = document.getElementsByTagName('script')[0];
		if (!document.getElementById(id)) {
				js = document.createElement('script');
				js.id = id;
				js.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52c1fc802ef0b066';
				fjs.parentNode.insertBefore(js, fjs);
		}
});

var toggle = function(e, t) {
	e.preventDefault();
	$("#wrapper").toggleClass("active");
};

Template.storeLayout.events({ 'click #menu-toggle' : toggle });
Template.hardwareLayout.events({ 'click #menu-toggle' : toggle });
Template.buildLayout.events({ 'click #menu-toggle' : toggle });
Template.controllerLayout.events({ 'click #menu-toggle' : toggle });
Template.aboutLayout.events({ 'click #menu-toggle' : toggle });
Template.downloadLayout.events({ 'click #menu-toggle' : toggle });

function endsWith(str, suffix) {
		return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var menuItem = function() {
	if (this.page != null) {
		this.classActive = endsWith(this.url,this.page)?"active":"";
	}
	return Template.menuItem;
};

UI.registerHelper('menu', menuItem);

/*Template.hardwaremenu.helpers({menu:menuItem});
Template.aboutmenu.helpers({menu:menuItem});
Template.buildmenu.helpers({menu:menuItem});
Template.controllermenu.helpers({menu:menuItem});
Template.downloadmenu.helpers({menu:menuItem});
*/


var isDisqusLoaded = false,
myScriptLoader = function funcMyScriptLoader(jsEl, callback) {
		if (window.attachEvent) {
			// for IE (sometimes it doesn't send loaded event but only complete)
			jsEl.onreadystatechange = function funcOnReadyStateChange() {
				if (jsEl.readyState === 'complete') {
					jsEl.onreadystatechange = "";
				} else if (jsEl.readyState === 'loaded') {
					jsEl.onreadystatechange = "";
				}

				if (typeof callback === 'function') {
					callback();
				}
			};
		} else {
			// most browsers
			jsEl.onload = function funcOnLoad () {
				if (typeof callback === 'function') {
					callback();
				}
			};
		}
};

Handlebars.registerHelper('cacherandom', function() {
		return Math.floor(Math.random()*999999999999)
});


DISQUS_LOADER = function() {
	var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	dsq.src = '//' + "mysensors" + '.disqus.com/embed.js';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};


var url = function() {
	var id = window.location.pathname;
	if(id.charAt(id.length-1) == "/"){ id = id.substr(0, id.length - 1);}
	return "http://mysensors.org" + id;
}

Template.disqus.rendered = function () {
		if (Session.get('isDisqusLoaded') !== true) {
			disqus_url = url();
			DISQUS_LOADER();
			Session.set('isDisqusLoaded', true);
		}
		if (typeof(DISQUS) !== "undefined") {
			DISQUS.reset({
				reload: true,
				config: function() { this.page.url = url();}
			});
		}
};

}).call(this);
