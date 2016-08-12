import '../mock/test.run';
import {test} from '../mock/test.module';

describe('@Run', () => {
	it('decorates class', () => {
		expect(test._runBlocks.length).toBeGreaterThan(0);
	});
});
