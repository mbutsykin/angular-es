import '../mock/test.config';
import {test} from '../mock/test.module';

describe('@Config', () => {
	it('decorates class', () => {
		expect(test._configBlocks.length).toBeGreaterThan(0);
	});
});
