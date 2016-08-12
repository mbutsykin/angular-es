[![Build Status](https://travis-ci.org/mbutsykin/angular-es.svg?branch=dev)](https://travis-ci.org/mbutsykin/angular-es)
[![Coverage Status](https://coveralls.io/repos/github/mbutsykin/angular-es/badge.svg?branch=dev)](https://coveralls.io/github/mbutsykin/angular-es?branch=dev)
[![npm version](https://badge.fury.io/js/angular-es.svg)](https://badge.fury.io/js/angular-es)
[![Downloads](https://img.shields.io/npm/dm/angular-es.svg)](https://npmjs.org/package/angular-es)

# angular-es
This is a helper library for developing [Angular@1.x](https://github.com/angular/angular) applications with ES7 decorators.
<br/>

## Benefits
- Perfectly runs with [jspm](http://jspm.io/), [webpack](https://webpack.github.io/) & [babel](https://babeljs.io/)
- Supports lazy loading & initialization with libraries like [$ocLazyLoad](https://github.com/ocombe/ocLazyLoad)
- Perfectly suits for `folder-by-feature` application structure
- Simple in usage

## Installation
```
npm install angular-es
```

## Available decorators

- [@Component](#component)
- [@Config](#config)
- [@Constant](#constant)
- [@Controller](#controller)
- [@Decorator](#decorator)
- [@Directive](#directive)
- [@Factory](#factory)
- [@Filter](#filter)
- [@Inject](#inject)
- [@InjectAsProperty](#injectAsProperty)
- [@Module](#module)
- [@Provider](#provider)
- [@Run](#run)
- [@Service](#service)
- [@Value](#value)

## Usage

### Component
Define component

```javascript
import {Component, Module, Inject} from 'angular-es';

@Module('my.module')
@Component({
	selector: 'my-component',
	bindings: {
		data: '='
	},
	template: `<p>{{ $ctrl.data }}</p>`
})
@Inject('myService')
class MyComponentController {

	myService;
	
	constructor(myService) {
		this.myService = myService;
	}
}
```

### Config
Add config block

```javascript
import {Config, Module, Inject} from 'angular-es';

@Module('my.module')
@Config
@Inject('$myServiceProvider')
class MyModuleConfig {
	
	constructor($myServiceProvider) {
	}
}
```

### Constant
Register constant

```javascript
import {Constant, Module} from 'angular-es';

@Module('my.module')
@Constant('MY_CONSTANT')
class MyConstant {
	foo = 'foo';
	bar = 'bar';
}
```

### Controller
Register controller

```javascript
import {Controller, Module, Inject} from 'angular-es';

@Module('my.module')
@Controller('MyController')
@Inject('$myService')
class MyController {
	
	$myService;
	
	constructor($myService) {
		this.$myService = $myService;
	}
}
```

### Decorator
Provide decorator

```javascript
import {Decorator, Module, Inject} from 'angular-es';

@Module('my.module')
@Decorator('$http')
@Inject('$delegate')
class HttpDecorator {
	constructor($delegate) {
		$delegate.decorated = true;

		return $delegate;
	}
}

export {HttpDecorator};

```

### Directive
Register directive

```javascript
import {Directive, Module, Inject} from 'angular-es';

@Module('my.module')
@Directive('my-directive')
@Inject('$myService')
class MyDirective {
	
	$myService;
	
	restrict = 'A';
	controllerAs = 'vm';
	
	constructor($myService) {
		this.$myService = $myService;
	}
	
	@Inject('$scope')
	controller($scope) {
	}
	
	link(scope) {
		this.$myService;
	}
}
```

### Factory
Register factory

```javascript
import {Factory, Module, Inject} from 'angular-es';

class TestModel {
	static $q;
	static myService
}

@Module('my.module')
@Factory('TestModel')
@Inject('$q', 'myService')
class TestModelFactory {
	constructor($q, myService) {
		TestModel.$q = $q;
		TestModel.myService = myService;
		return TestModel;
	}
}

```

### Filter
Register filter

```javascript
import {Module, Filter, Inject} from 'angular-es';

@Module('my.module')
@Filter('test')
@Inject('$q')
class TestFilter {

	$q;

	constructor($q) {
		this.$q = $q;
		return ::this.filter;
	}

	filter(input) {
		const $q = this.$q;
		return input.toUpperCase();
	}
}
```

### Inject
Adds `$inject` to target

```javascript
import {Inject} from 'angular-es';

@Inject('$rootScope')
class BaseInjectedClass {
}

@Inject('$http', '$q')
class InjectedClass extends BaseInjectedClass {

    constructor($rootScope, $http, $q) {
    	super($rootScope);
    }

	@Inject('$q')
	injectedMethod() {
	}

	@Inject('$q')
	static injectedMethod() {
	}
}
```

### InjectAsProperty
Injects provided dependencies as properties

```javascript
import {Module, Service, InjectAsProperty} from 'angular-es';

@Module(test.name)
@Service('testService')
@InjectAsProperty('$q', '$http')
class TestService {
	testMethod() {
		return this.$http();
	}
}
```

### Module
Attaches target to specified angular module
<br />
`@Module` decorator is **required** and it has to be present at the top level of target annotation block
<br />
*Make sure that used angular module is already available*

```javascript
import {Module, Controller} from 'angular-es';
import my from './my.module';

@Module(my.name)
@Controller('MyController')
class MyController {
}
```

### Provider
Register provider

```javascript
import {Provider, Module, Inject} from 'angular-es';

@Module('my.module')
@Provider('myService')
class MyServiceProvider {

	static config;

	config(config) {
		MyServiceProvider.config = config;
	}

	@Inject('$q')
	$get($q) {
		return {
			getConfig: getConfig
		};

		function getConfig() {
			return $q.resolve(MyServiceProvider.config);
		}
	}
}

```

### Run
Add run block

```javascript
import {Run, Module, Inject} from 'angular-es';

@Module('my.module')
@Run
@Inject('$rootScope')
class MyRunBlock {
	
	constructor($rootScope) {
	}
}
```

### Service
Register service

```javascript
import {Service, Module, Inject} from 'angular-es';

@Module('my.module')
@Service('MyService')
@Inject('$http')
class MyService {
	
	$http;
	
	constructor($http) {
		this.$http = $http;
	}
}
```

### Value
Register value

```javascript
import {Value, Module} from 'angular-es';

@Module('my.module')
@Value('myValue')
class MyValue {
	foo = 'foo';
	bar = 'bar';
}
```
