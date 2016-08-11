import 'angular';
import 'angular-mocks';
import {test} from './mock/test.module';

beforeEach(angular.mock.module(test.name));

var testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
