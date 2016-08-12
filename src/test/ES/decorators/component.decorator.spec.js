import '../mock/test.component';

describe('@Component', function() {
	var $componentController;

	beforeEach(angular.mock.inject(_$componentController_ => {
		$componentController = _$componentController_;
	}));

	it('should expose a `hero` object', () => {
		let bindings = {hero: {name: 'Wolverine'}},
			ctrl = $componentController('heroDetail', null, bindings);

		expect(ctrl.hero).toBeDefined();
		expect(ctrl.hero.name).toBe('Wolverine');
	});
});
