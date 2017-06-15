(function(){

if (Meteor.isClient) {
	Router.configure({
		layoutTemplate: 'layout',
		notFoundTemplate: 'not_found',
		onBefore: function() {
			Session.set("hash", undefined);
		},
		data: function () {
			var hash = this.params.hash != null ? "#" + this.params.hash : undefined;
			Session.set("hash", hash);
			return {page: this.path, "hash": hash};
		},
		onAfterAction: function() {
			var self = this;

			Deps.afterFlush(function () {

				// Set document title
				document.title = "MySensors - " + (self.path=="/"?"Internet of Your Things!":$("h1").text());
				// Remove old meta description
				$('meta[name=description]').remove();
				// Find first patagraph after h1 tage.
				var p = $("p").text(); // Find paragraphs
				p = p.replace(/\s\s+/g, ' ').replace(/\"/g, ''); // Remove whitespaces
				p = p.substring(0, Math.min(160,p.length)); // Limit meta description to 160 characters
				$('head').append( '<meta name="description" content="'+p+'">');

				GAnalytics.pageview();

				// Refresh share buttons
				if ($("#sharebuttons").length >0 && typeof addthis !== "undefined" && addthis !== null) {
					addthis.toolbox(".addthis_toolbox");
				}


				// Switch disqus board
				if ($("#my-disqus").length >0 &&  typeof DISQUS !== "undefined" && DISQUS !== null) {
					var id = window.location.pathname;
					if(id.charAt(id.length-1) == "/"){ id = id.substr(0, id.length - 1);}
					DISQUS.reset({
						reload: true,
						config: function() { this.page.url = "http://mysensors.org"+id;}
					});
				}
				});
		}
	});
}

function routeRendered(self) {
	$(".popupMenu").remove();
	var link = $('#buildnav a[href$="'+self.params.id+'"]');
	var elem = $('<ul class="fa-ul">'); //$(document.createElement('ul').attr("class", "submenu"));

	$("h2").each(function() {
		// Generate an id for header
		var id = $(this).text().toLowerCase().replace(/[\/\?\.'")()]/g,'').replace(/ /g, "-");
		$(this).before("<a class='anchor' id='"+id+"'></a>");
		//$(this).attr("id", id);
		elem.append('<li class="popupMenu"><i class="fa-li fa fa-caret-right"></i><a href="#' + id + '">' +  $(this).text() + '</a></li>');
	});

	// Hilight code
	$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
	});

	scrollHash(Session.get("hash"));

	link.parent().append(elem);
	Deps.autorun(function () {
			scrollHash(Session.get("hash"));
	});
};


var dataFunc = function (prefix) {
		return function () {
			var id = this.params.id;
			Session.set("page", prefix+"/"+this.path);
			Session.set("hash", this.params.hash != null ? "#" + this.params.hash : undefined);
			if (Template[prefix + "_" + this.params.id] != null) {
				return {found:true, page:prefix+"/"+this.path, id:id};
			}
		};
}

var actionFunc = function(prefix) {
	return function() {var page = prefix +"_"+this.params.id;
		var self = this;
		Template[page].rendered = function () {routeRendered(self)};
		this.render(page);
		if (window[page+"_rendered"]) {
				window[page+"_rendered"]();
		}
	};
}

Router.map(function () {
	this.route('welcome', { path: '/'});
	this.route('contest2014');
	this.route('contest2015');
	this.route('contest2016');
	this.route('history');
//	this.route('store');

	this.route('store', {
		layoutTemplate:'storeLayout'
	});


	this.route('download', {
		layoutTemplate:'downloadLayout'
	});
	this.route('download/:id', {
		layoutTemplate:'downloadLayout',
		data: dataFunc("download"),
		action: actionFunc("download"),
		notFoundTemplate: 'coming_soon'
	});


	this.route('build', {
		layoutTemplate:'buildLayout'
	});
	this.route('build/:id', {
		layoutTemplate:'buildLayout',
		data: dataFunc("build"),
		action: actionFunc("build"),
		notFoundTemplate: 'coming_soon'
	});

	this.route('hardware', {
		layoutTemplate:'hardwareLayout'
	});
	this.route('hardware/:id', {
		layoutTemplate:'hardwareLayout',
		data: dataFunc("hardware"),
		action: actionFunc("hardware"),
		notFoundTemplate: 'coming_soon'
	});

	this.route('controller', {
		layoutTemplate:'controllerLayout'
	});
	this.route('controller/:id', {
		layoutTemplate:'controllerLayout',
		data: dataFunc("controller"),
		action: actionFunc("controller"),
		notFoundTemplate: 'coming_soon'
	});

	this.route('about', {
		layoutTemplate:'aboutLayout'
	});
	this.route('about/:id', {
		layoutTemplate:'aboutLayout',
		data: dataFunc("about"),
		action: actionFunc("about"),
		notFoundTemplate: 'coming_soon'
	});


	this.route('h', {
		action: function() {
			this.redirect("/hardware")
		}
	});


	this.route('coming_soon');
	this.route('hall-of-fame');
	this.route('privacy');
	this.route('tos');
	this.route('cla');

/*
	this.route('cloud', {
		layoutTemplate:'cloudLayout',
		data: function() {
			Session.set("page", this.path);
			return {found:true, page:this.path, id:""};
		},
		onBeforeAction: function() {
			return AccountsEntry.signInRequired(this);
		}
	});
	this.route('cloud/:id', {
		layoutTemplate:'cloudLayout',
		data: function() {
			var id = this.params.id;
			Session.set("page", this.path);
			Session.set("hash", this.params.hash != null ? "#" + this.params.hash : undefined);
			if (Template["cloud_"+this.params.id] != null) {
				return {found:true, page:this.path, id:id};
			}
		},
		action: function() {

			var self = this;

			Template["cloud_"+this.params.id].rendered = function() {
				scrollHash(Session.get("hash"));

				Deps.autorun(function () {
						scrollHash(Session.get("hash"));
				});
				if (window["cloud_"+self.params.id+"_rendered"]) {
					window["cloud_"+self.params.id+"_rendered"]();
				}
			}
			this.render("cloud_"+this.params.id);
		},
		notFoundTemplate: 'coming_soon',
		onBeforeAction: function() {
			return AccountsEntry.signInRequired(this);
		}
	});

	this.route('admin', {
		path: '/admin',
		onBeforeAction: function() {
			if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
					this.redirect('/');
			}
			return AccountsEntry.signInRequired(this);
		}
	});
	*/

	this.route('git', {
		path: '/git/:repo/:xxx(.*)',
		where: 'server',

		action: function () {
			var self = this;
			var filename = this.params.xxx.split('/').pop();
			var res = Meteor.call('githubContent',this.params.repo, this.params.xxx);
			if (res.content != null) {
				self.response.writeHead(200, {'Content-Type': 'application/octet-stream',
											'Content-Disposition': "attachment; filename=" + filename});
				self.response.end(res.content);

			}
		}
	});

	this.route('embed', {
		path: '/embed/:user/:repo/:xxx(.*)',
		where: 'server',

		action: function () {
			var self = this;
			var filename = this.params.xxx.split('/').pop();

			var options = {
	          host: 'raw.githubusercontent.com',
	          path: "/"+this.params.user+"/"+this.params.repo+"/master/"+this.params.xxx,
	          port: 443,
	          headers: {
	              accept: '*/*'
	          }
	        };

	        self.response.writeHead(200, {
					//'Content-Type': 'application/pdf',
					//'Content-Disposition': "attachment; filename=" + filename,
					//'Content-Length': res.length+1000
			});

	        var req = Meteor.npmRequire("https").request(options, function(res) {
	          //var data;
	          //res.setEncoding('utf8');
	          res.on('data', function (chunk) {
	          	//console.log(chunk.length);
	          	self.response.write(chunk, 'binary');
	            //data += chunk;
	          });
	          res.on('end', function() {
	        	//console.log("end");
	              self.response.end();
	          });
	        });
	        req.end();
	        req.on('error', function(e) {
	        	//console.log("error");
	             self.response.end();
	        });

		}
	});

	this.route('sitemap', {
		path: '/sitemap.xml',
		where: 'server',
		action: function () {
			var now = moment().format("YYYY-MM-DD");
			var serverName = "https://www.mysensors.org/"

			var routers = [	"", "contest2014",  "contest2015", "contest2016", "privacy", "cla", "tos", "store", "history"];

			var sub = { "build":
										[	"connect_radio", "binary", "distance", "humidity","light",
											"motion",  "pressure", "pulse_power", "pulse_water", "moisture" ,
											"relay", "servo" , "temp",  "battery", "debug", "sensor_api", "mqtt_gateway",
											"esp8266_gateway", "ethernet_gateway", "serial_gateway", "select_gateway", "advanced_gateway",
											"dimmer", "dust", "gas", "ir", "rfid", "knock", "uv", "rain", "irrigation",
											"scene_controller", "display", "parking", "print", "esp8266_gateway" ],
									"controller":
										[ "fhem", "domotiga","freedomotic","homeseer", "vera","sniffer", "myscontroller",
											"agocontrol", "indigo", "openhab", "pidome", "pimatic", "jeedom", 
											"majordomo", "domoticz", "homeassistant", "mycontroller", "mynodesnet", 
											"openluup", "calaos", "iobroker", "homidom"],
									"about":
										["iot","components", "network", "arduino", "mysensors", "hall-of-fame"],
									"hardware":
										["micro", "mys", "ceech"],
									"download" :
										["serial_api_13", "serial_api_14", "serial_api_15", "sensor_api_13", "sensor_api_14", "sensor_api_15"]
								};

		 var addOne = function(url, freq, prio) {
				xmldata+="<url>\n";
				xmldata+="<loc>"+serverName + url+"</loc>\n";
				xmldata+="<lastmod>"+now+"</lastmod>\n";
				xmldata+="<changefreq>"+freq+"</changefreq>\n";
				xmldata+="<priority>"+prio+"</priority>\n";
				xmldata+="</url>\n";
			}


			xmldata = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">';
			_.each(routers, function(url) {
				addOne(url, "daily", "0.8")
			});
			_.each(sub, function(posts,prefix) {
				addOne(prefix, "daily", "0.8");
				_.each(posts, function(url) {
					addOne(prefix+"/"+url, "daily", "0.8");
				});
			});
			xmldata+="</urlset>";
			this.response.end(xmldata);
		}

	});




	/*this.route("entrySignIn", {
		path: "/sign-in",
		onBeforeAction: function() {
			Session.set('entryError', null);
			return Session.set('buttonText', 'in');
		},
		onRun: function() {
			var pkgRendered, userRendered;
			if (AccountsEntry.settings.signInTemplate) {
				this.template = AccountsEntry.settings.signInTemplate;
				pkgRendered = Template.entrySignIn.rendered;
				userRendered = Template[this.template].rendered;
				if (userRendered) {
					Template[this.template].rendered = function() {
						pkgRendered.call(this);
						return userRendered.call(this);
					};
				} else {
					Template[this.template].rendered = pkgRendered;
				}
				Template[this.template].events(AccountsEntry.entrySignInEvents);
				return Template[this.template].helpers(AccountsEntry.entrySignInHelpers);
			}
		}
	});
	this.route("entrySignUp", {
		path: "/sign-up",
		onBeforeAction: function() {
			Session.set('entryError', null);
			return Session.set('buttonText', 'up');
		},
		onRun: function() {
			var pkgRendered, userRendered;
			if (AccountsEntry.settings.signUpTemplate) {
				this.template = AccountsEntry.settings.signUpTemplate;
				pkgRendered = Template.entrySignUp.rendered;
				userRendered = Template[this.template].rendered;
				if (userRendered) {
					Template[this.template].rendered = function() {
						pkgRendered.call(this);
						return userRendered.call(this);
					};
				} else {
					Template[this.template].rendered = pkgRendered;
				}
				Template[this.template].events(AccountsEntry.entrySignUpEvents);
				return Template[this.template].helpers(AccountsEntry.entrySignUpHelpers);
			}
		}
	});
	this.route("entryForgotPassword", {
		path: "/forgot-password",
		onBeforeAction: function() {
			return Session.set('entryError', null);
		}
	});
	this.route('entrySignOut', {
		path: '/sign-out',
		onBeforeAction: function(pause) {
			Session.set('entryError', null);
			if (AccountsEntry.settings.homeRoute) {
				Meteor.logout(function() {
					return Router.go(AccountsEntry.settings.homeRoute);
				});
			}
			return pause();
		}
	});
	return this.route('entryResetPassword', {
		path: 'reset-password/:resetToken',
		onBeforeAction: function() {
			Session.set('entryError', null);
			return Session.set('resetToken', this.params.resetToken);
		}
	});*/


	this.route('not_found', { path: '*' });


});

}).call(this);
