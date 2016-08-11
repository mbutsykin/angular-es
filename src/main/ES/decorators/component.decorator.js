import angular from 'angular';
import {hyphen2camel} from '../helpers';

function component(config) {
	return target => {
		target.ngConfig = config;
		target.ngName = hyphen2camel(config.selector);
		target.ngType = 'component';
		target.ngArguments = [target.ngName, angular.extend({}, config, {
			controller: target
		})];

		return target;
	};
}

export default component;
