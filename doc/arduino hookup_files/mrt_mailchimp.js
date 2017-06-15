//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var MailChimp;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/mrt_mailchimp/packages/mrt_mailchimp.js                                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
(function () {                                                                                            // 1
                                                                                                          // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                 //     // 4
// packages/mrt:mailchimp/lib/client/views/subscribe/template.subscribe.js                         //     // 5
//                                                                                                 //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                   //     // 8
                                                                                                   // 1   // 9
Template.__define__("MailChimpListSubscribe", (function() {                                        // 2   // 10
  var view = this;                                                                                 // 3   // 11
  return HTML.DIV("\n	", Blaze.If(function() {                                                     // 4   // 12
    return Spacebars.call(view.lookup("message"));                                                 // 5   // 13
  }, function() {                                                                                  // 6   // 14
    return [ "\n		", HTML.P({                                                                      // 7   // 15
      "class": "message"                                                                           // 8   // 16
    }, Blaze.View(function() {                                                                     // 9   // 17
      return Spacebars.mustache(view.lookup("message"));                                           // 10  // 18
    })), "\n	" ];                                                                                  // 11  // 19
  }), HTML.Raw('\n		<input class="email" type="email" placeholder="email@example.com">\n		<button class="subscribe" type="button">Subscribe</button>\n	'));
}));                                                                                               // 13  // 21
                                                                                                   // 14  // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 23
                                                                                                          // 24
}).call(this);                                                                                            // 25
                                                                                                          // 26
                                                                                                          // 27
                                                                                                          // 28
                                                                                                          // 29
                                                                                                          // 30
                                                                                                          // 31
(function () {                                                                                            // 32
                                                                                                          // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 34
//                                                                                                 //     // 35
// packages/mrt:mailchimp/lib/client/views/subscribe/subscribe.js                                  //     // 36
//                                                                                                 //     // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 38
                                                                                                   //     // 39
var subscribeTitle,                                                                                // 1   // 40
	subscribeEmail,                                                                                   // 2   // 41
	subscribeButton,                                                                                  // 3   // 42
	subscribeMessage			= 'Get on the mailing list:',                                                  // 4   // 43
	subscribeInvalidEmail		= 'Invalid email address :(',                                              // 5   // 44
	subscribeSubscribing		= 'Subscribing...',                                                         // 6   // 45
	subscribeSuccess			= 'Check your inbox! :)',                                                      // 7   // 46
	subscribeAlreadySubscribed	= 'Already subscribed! O.o',                                           // 8   // 47
                                                                                                   // 9   // 48
	showMessage = function ( message ) {                                                              // 10  // 49
		if ( subscribeTitle ) {                                                                          // 11  // 50
			subscribeTitle.innerHTML = message;                                                             // 12  // 51
		}                                                                                                // 13  // 52
	},                                                                                                // 14  // 53
                                                                                                   // 15  // 54
	isValidEmailAddress = function ( emailAddress ) {                                                 // 16  // 55
		// http://stackoverflow.com/a/46181/11236                                                        // 17  // 56
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test( emailAddress );                                                                  // 19  // 58
	},                                                                                                // 20  // 59
                                                                                                   // 21  // 60
	validateEmailAddress = function ( updateMessage ) {                                               // 22  // 61
		if ( subscribeEmail.value !== '' && isValidEmailAddress( subscribeEmail.value ) ) {              // 23  // 62
			subscribeButton.disabled = false;                                                               // 24  // 63
			if ( updateMessage ) {                                                                          // 25  // 64
				showMessage( subscribeMessage );                                                               // 26  // 65
			}                                                                                               // 27  // 66
		} else {                                                                                         // 28  // 67
			subscribeButton.disabled = true;                                                                // 29  // 68
			if ( subscribeEmail.value !== '' ) {                                                            // 30  // 69
				showMessage( subscribeInvalidEmail );                                                          // 31  // 70
			} else if ( updateMessage ) {                                                                   // 32  // 71
				showMessage( subscribeMessage );                                                               // 33  // 72
			}                                                                                               // 34  // 73
		}                                                                                                // 35  // 74
	},                                                                                                // 36  // 75
                                                                                                   // 37  // 76
	mailChimpListSubscribe = function ( email, list_id ) {                                            // 38  // 77
		var mailChimp = new MailChimp(/* apiKey, options */);                                            // 39  // 78
                                                                                                   // 40  // 79
		mailChimp.call( 'lists', 'subscribe',                                                            // 41  // 80
			{                                                                                               // 42  // 81
				id: list_id,		// null -> defined @ server                                                      // 43  // 82
				email: {                                                                                       // 44  // 83
					email: email                                                                                  // 45  // 84
				}                                                                                              // 46  // 85
			},                                                                                              // 47  // 86
                                                                                                   // 48  // 87
			function ( error, result ) {                                                                    // 49  // 88
				if ( error ) {                                                                                 // 50  // 89
					switch ( error.error ) {                                                                      // 51  // 90
						case 232:	// 'Email_NotExists'                                                               // 52  // 91
							showMessage( subscribeInvalidEmail );                                                       // 53  // 92
							break;                                                                                      // 54  // 93
						case 214:	// 'List_AlreadySubscribed'                                                        // 55  // 94
							showMessage( subscribeAlreadySubscribed );                                                  // 56  // 95
							break;                                                                                      // 57  // 96
						case 200:	// 'List_DoesNotExist'                                                             // 58  // 97
							// We shouldn't be here!                                                                    // 59  // 98
						default:                                                                                     // 60  // 99
							showMessage( 'Internal error [' + error.error + ']' );                                      // 61  // 100
					}                                                                                             // 62  // 101
					console.log( '[MailChimp][Subscribe] Error: ' + error.error + ' - ' + error.reason );         // 63  // 102
				} else {                                                                                       // 64  // 103
					console.log( '[MailChimp][Subscribe]: ' + subscribeEmail.value + ' ' + subscribeSuccess );    // 65  // 104
					console.log( JSON.stringify( result ) );                                                      // 66  // 105
					showMessage( subscribeSuccess );                                                              // 67  // 106
				}                                                                                              // 68  // 107
                                                                                                   // 69  // 108
				subscribeEmail.disabled = false;                                                               // 70  // 109
				validateEmailAddress( false );                                                                 // 71  // 110
			}                                                                                               // 72  // 111
		);                                                                                               // 73  // 112
	},                                                                                                // 74  // 113
                                                                                                   // 75  // 114
	subscribeGo = function ( eventBubbling ) {                                                        // 76  // 115
		subscribeEmail.disabled		= true;                                                                 // 77  // 116
		subscribeButton.disabled	= true;                                                                 // 78  // 117
		showMessage( subscribeSubscribing );                                                             // 79  // 118
		mailChimpListSubscribe( subscribeEmail.value );                                                  // 80  // 119
		// Prevent Event Bubbling                                                                        // 81  // 120
		return eventBubbling;                                                                            // 82  // 121
	};                                                                                                // 83  // 122
                                                                                                   // 84  // 123
Template.MailChimpListSubscribe.rendered = function () {                                           // 85  // 124
	subscribeTitle	= this.find( '.message' );                                                         // 86  // 125
	subscribeEmail	= this.find( '.email' );                                                           // 87  // 126
	subscribeButton	= this.find( '.subscribe' );                                                      // 88  // 127
	subscribeButton.disabled = ( subscribeEmail.value === '' );                                       // 89  // 128
};                                                                                                 // 90  // 129
                                                                                                   // 91  // 130
Template.MailChimpListSubscribe.helpers({                                                          // 92  // 131
	message: function() {                                                                             // 93  // 132
		return subscribeMessage;                                                                         // 94  // 133
	}                                                                                                 // 95  // 134
});                                                                                                // 96  // 135
                                                                                                   // 97  // 136
Template.MailChimpListSubscribe.events({                                                           // 98  // 137
	'focus .email, paste .email, cut .email': function ( e ) {                                        // 99  // 138
		setTimeout(function( e ) {                                                                       // 100
			validateEmailAddress( true );                                                                   // 101
		}, 0);                                                                                           // 102
	},                                                                                                // 103
                                                                                                   // 104
	'keyup .email': function ( e ) {                                                                  // 105
		var key = e.which || e.keyCode || e.charCode;                                                    // 106
		if ( key === 8 ||				// [Backspace]                                                              // 107
			 key === 46	) {				// [Delete]                                                                  // 108
			setTimeout(function() {                                                                         // 109
				validateEmailAddress( true );                                                                  // 110
			}, 0);                                                                                          // 111
		}                                                                                                // 112
	},                                                                                                // 113
                                                                                                   // 114
	'keypress .email': function ( e ) {                                                               // 115
		var key = e.which || e.keyCode || e.charCode;                                                    // 116
		setTimeout(function() {                                                                          // 117
			validateEmailAddress( true );                                                                   // 118
			if ( isValidEmailAddress( subscribeEmail.value  ) ) {                                           // 119
				if ( key === 13	) {		// [Return]                                                               // 120
					subscribeGo( true );                                                                          // 121
				}                                                                                              // 122
			}                                                                                               // 123
		}, 0);                                                                                           // 124
	},                                                                                                // 125
                                                                                                   // 126
	'click .subscribe': function ( e ) {                                                              // 127
		validateEmailAddress( true );                                                                    // 128
		if ( isValidEmailAddress( subscribeEmail.value  ) ) {                                            // 129
			subscribeGo( false );                                                                           // 130
		}                                                                                                // 131
	}                                                                                                 // 132
});                                                                                                // 133
                                                                                                   // 134
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 174
                                                                                                          // 175
}).call(this);                                                                                            // 176
                                                                                                          // 177
                                                                                                          // 178
                                                                                                          // 179
                                                                                                          // 180
                                                                                                          // 181
                                                                                                          // 182
(function () {                                                                                            // 183
                                                                                                          // 184
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 185
//                                                                                                 //     // 186
// packages/mrt:mailchimp/lib/client/mailchimp.js                                                  //     // 187
//                                                                                                 //     // 188
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 189
                                                                                                   //     // 190
MailChimp = function( apiKey, options ) {                                                          // 1   // 191
	this._options = function(){                                                                       // 2   // 192
		return {                                                                                         // 3   // 193
			apiKey: ( apiKey ) ? apiKey : Session.get( 'MailChimpOptions.apiKey' ),                         // 4   // 194
			options: options                                                                                // 5   // 195
		}                                                                                                // 6   // 196
	}                                                                                                 // 7   // 197
}                                                                                                  // 8   // 198
                                                                                                   // 9   // 199
MailChimp.prototype.call = function( section, method, options, callback ) {                        // 10  // 200
	Meteor.call( 'MailChimp', this._options(), section, method, options, function ( error, result ) { // 11  // 201
		callback( error, result );                                                                       // 12  // 202
	});                                                                                               // 13  // 203
}                                                                                                  // 14  // 204
                                                                                                   // 15  // 205
/////////////////////////////////////////////////////////////////////////////////////////////////////     // 206
                                                                                                          // 207
}).call(this);                                                                                            // 208
                                                                                                          // 209
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:mailchimp'] = {
  MailChimp: MailChimp
};

})();
