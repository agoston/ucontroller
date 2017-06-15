(function(){
scrollHashStore = function (hash) {
		if (hash == null) {
				hash = Session.get("hash");
		}
		if (hash != null) {
				//console.log(hash);
				if ($(hash).offset() != null) {
						$('html, body').animate({scrollTop: $(hash).offset().top}, 500);
				} else {
						$('html, body').animate({scrollTop: 0}, 500);
				}
		}
};


Template.store.rendered = function () {

	Deps.autorun(function () {
		scrollHashStore(Session.get("hash"));

	});

	 var w = $(window),
				b = $(document.body),
				id,
				navHeight = $('#navbar').outerHeight(true) + 20;

		b.scrollspy({
				target: '#sidebar-wrapper',
				offset: navHeight
		});

		w.on('load', function () {
				b.scrollspy('refresh');
		});

		w.resize(function () {
				clearTimeout(id);
				id = setTimeout(function () { b.scrollspy('refresh'); }, 500);
		});

		setTimeout(function () { scrollHashStore(); }, 1000);
};


UI.registerHelper('shop', function() {
		var self = this;
		Meteor.call('fetchEbayCategory',this.category, function(error, result) {
				$("#r_"+self.category ).html("");
				_.each(result.items, function (item, index) {
						item.url = item.ebay?item.ebay.url:(item.ali?item.ali.url:"");
						item.pic = item.ebay?item.ebay.pic:(item.ali?item.ali.pic:"");
						item.class = index%2==0?"shopLeftItem":"shopRightItem";
						if (item.ebay) {
							item.url = item.ebay.url;
							item.pic = item.ebay.pic;
							item.ebay.color = item.ebay.stock<=10?(item.ebay.stock==0?"red":"orange"):"green";
							item.ebay.stockText = (item.ebay.stock == 0) ? "Out of stock" : (item.ebay.stock<=10?"Low in stock":"In stock");
							item.ebay.ok = item.ebay.stock > 0;
							item.ebay.price = Number(item.ebay.price).toFixed(2);
						}
						if (item.ali) {
							if (!item.pic) {
								item.url = item.ali?item.ali.url:"";
								item.pic = item.ali?item.ali.pic:"";
							}
							item.ali.color = item.ali.stock<=10?(item.ali.stock==0?"red":"orange"):"green";
							item.ali.stockText = (item.ali.stock == 0) ? "Out of stock" : (item.ali.stock<=10?"Low in stock":"In stock");
							item.ali.ok = item.ali.stock > 0;
							item.ali.price = Number(item.ali.price).toFixed(2);
						}
						if (item.mysensors) {
							if (!item.pic) {
								item.url = item.mysensors?item.mysensors.url:"";
								item.pic = item.mysensors?item.mysensors.pic:"";
							}
							item.mysensors.color = item.mysensors.stock<=10?(item.mysensors.stock==0?"red":"orange"):"green";
							item.mysensors.stockText = (item.mysensors.stock == 0) ? "Out of stock" : (item.mysensors.stock<=10?"Low in stock":"In stock");
							item.mysensors.ok = item.mysensors.stock > 0;
							item.mysensors.price = Number(item.mysensors.price).toFixed(2);
						}
				});

				if($("#r_"+self.category).length >0 ) {
						Blaze.renderWithData(Template.storeCategory, result, $("#r_"+self.category).get(0));
						//scrollHashStore(Session.get("hash"));
						$(document.body).scrollspy('refresh');
				}
		});
		return Template.storeCategoryHolder;
});

}).call(this);
