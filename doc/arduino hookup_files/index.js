(function(){
UI.registerHelper('example', function() {
	var self = this;
	this.repo = "Arduino";
	this.path = "libraries/MySensors/examples/" +  this.name + "/" + this.name + ".ino";
	 this.id = this.repo+this.path.replace(/[\/.]/g,"");
	 this.gh = "https://github.com/mysensors/"+this.repo+"/blob/master/"+this.path;
	 this.downloadLink = /git/ + this.repo + "/" + this.path;
	// this.codebender = "example/MySensor/"+this.name;

	// Fetch source from github and update html when result comes back from server
	Meteor.call('github',this.repo, this.path, function(error, src) {
			if (src != null && src.avatar != null) {
			//	self.content = highlight(src.content,"cpp");
				self.committer = src.name;
				self.avatar = src.avatar;
				self.message = src.message;
				self.date = moment(src.date).format("D MMM YYYY");

				// Remove temporary content
				$("#"+self.id ).html("");
				Blaze.renderWithData(self.noHeader?Template.exampleFileNoHeader:Template.exampleFile, self, $("#"+self.id).get(0));
			}
	});

	this.content = "Loading...";
	this.lastModified = "";
	if (this.noHeader)
		return Template.exampleFileNoHeader;
	else 
		return Template.exampleFile;
});


UI.registerHelper('dl', function() {
	var result = {};
//  this.path = "libraries/MySensors/examples/" +  this.name + "/" + this.name + ".ino";

	this.path += (this.path!=""?"/":"") + this.name;
	this.gh = "https://github.com/mysensors/"+this.repo+"/blob/master/"+this.path;
	this.name = this.skipName != 'true' ? (" | " + this.name ): "";
	this.downloadLink = /git/ + this.repo + "/" + this.path;
	return Template.downloadFile;
});

}).call(this);
