marketCapApp.service('MarketCapService', function() {
	this.asxDataUrl = 'php/asx.php';
	
	this.msgs = {
		waiting: '-',
		loading: '..',
		unknownMarketCap: 'No market cap available'
	};
	this.jsonKeys = {
		primaryShare: 'primary_share',
		marketCap: 'market_cap'
	};
	this.logError = function(res) {
		console.error(res);
	};
});