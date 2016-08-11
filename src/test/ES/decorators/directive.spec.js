import '../mock/test.directive';

describe('@Directive', function() {
	var $compile,
		testTagValue,
		$rootScope;

	beforeEach(angular.mock.inject((_$compile_, _testTagValue_, _$rootScope_) => {
		$compile = _$compile_;
		testTagValue = _testTagValue_;
		$rootScope = _$rootScope_;
	}));

	it('Compiles to HTML', () => {
		var element = $compile('<test-tag test="foo"/>')($rootScope);
		$rootScope.$digest();
		expect(element.html().length).toBeGreaterThan(0);
	});

	it('Controller has own context', () => {
		var element = $compile('<test-tag test="foo"/>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain(`<p class="ng-binding">foo</p>`.trim());
	});

	it('Link function context the same as directive function provider', () => {
		var element = $compile('<test-tag test="foo"/>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain(testTagValue);
	});
});
