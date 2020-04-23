marketCapApp.controller('MarketCapController', function(MarketCapService, $scope, $http, $filter) {
	$scope.$watch('tkr', function(newTkr, oldTkr) {
		var validTkr = (newTkr && newTkr.length === 3);
		if (validTkr && oldTkr !== newTkr) {
			getMarketCap(newTkr);
		} else {
			$scope.marketCap = MarketCapService.msgs.waiting;
		}
	}, true);
	
	function getMarketCap(tkr) {
		$scope.marketCap = MarketCapService.msgs.loading;
		$http({
			url: MarketCapService.asxDataUrl,
			method: 'GET',
			params: {
				tkr: tkr
			}
		}).then(showMarketCap, MarketCapService.logError);
	}

	function showMarketCap(res) {
		var jsonKeys = MarketCapService.jsonKeys;
		var validPayload = (res && res.data && res.data[jsonKeys.primaryShare]);
		if (validPayload) {
			var marketCap = res.data[jsonKeys.primaryShare][jsonKeys.marketCap];
			if (marketCap) {
				$scope.marketCap = $filter('currency')(marketCap, '$', 0);
			}
		} else {
			$scope.marketCap = MarketCapService.msgs.unknownMarketCap;
		}
	}
});