var _ = require('../')
var assert = require('assert')

describe('bind', function() {
	it('should support args', function(done) {
		var fn = _.bind(function(a, b, c, d) {
			assert.deepEqual(this, {a: 1})
			assert.equal(a, 2)
			assert(b, 3)
			assert.equal(c, 4)
			assert.equal(d, undefined)
			done()
		}, {a: 1}, 2, 3)

		fn(4)
	})

	it('work like jQuery proxy', function() {
		var obj = {
			sum: function(x) {
				return this.val + x
			},
			val: 10
		}
		var fn = _.bind(obj, 'sum', 5)
		assert(fn() == 15)
	})
})

describe('inherits', function() {
	it('should be instance', function() {
		function SonCtor() {}
		function ParentCtor() {}
		_.inherits(SonCtor, ParentCtor)
		var instance = new SonCtor
		assert(instance instanceof SonCtor)
		assert(instance instanceof ParentCtor)
	})
})

describe('before', function() {
	it('should return function which can be called less than n', function() {
		var sum = 0
		var fn = _.before(4, function() {
			sum += 1
		})
		for (var i = 0; i < 100; i++) {
			fn()
		}
		assert(3 == sum)
	})
})

describe('once', function() {
	it('should return function which can be called only once', function() {
		var sum = 0
		var fn = _.once(function() {
			sum += 1
		})
		for (var i = 0; i < 100; i++) {
			fn()
		}
		assert(1 == sum)
	})
})

describe('after', function() {
	it('should return function which can be called after exec n times', function() {
		var sum = 0
		var fn = _.after(3, function() {
			sum += 1
		})
		fn()
		assert(0 == sum)
		fn()
		assert(0 == sum)
		fn()
		assert(1 == sum)
		fn()
		assert(2 == sum)
	})
})

describe('delay', function() {
	it('should act like setTimeout', function(done) {
		var arr = []
		var timer = _.delay(function() {
			arr = _.slice(arguments)
		}, 100, 1, 2, 3)
		assert(timer)
		var start = _.now()
		var timer2 = setInterval(function() {
			var duration = _.now() - start
			if (3 == arr.length) {
				assert.deepEqual([1, 2, 3], arr)
				clearInterval(timer2)
				assert(duration > 100 && duration < 200)
				done()
			} else if (0 == arr.length) {
				assert(duration < 100)
			}
		}, 30)
	})
})

describe('debounce', function() {
	it('can debounce frequent call', function(done) {
		var sum = 0
		var start = _.now()
		var debounced = _.debounce(function() {
			sum += 1
		}, 100)
		var timer = setInterval(debounced, 20)
		var wait = 230
		var check1 = _.once(function(duration, timer) {
			setTimeout(function() {
				clearInterval(timer)
			}, 20)
			assert(duration > 200 && duration < 300)
		})
		var timer2 = setInterval(function() {
			var duration = _.now() - start
			if (duration > 400) {
				assert(false)
			} else {
				if (3 == sum) {
					assert(duration > 300 && duration < 400)
					clearInterval(timer2)
					done()
				} else if (2 == sum) {
					check1(duration, timer)
				}
			}
		}, 30)
	})
})

describe('throttle', function() {
	it('can throttle frequent call', function(done) {
		var sum = 0
		var start = _.now()
		var throttled = _.throttle(function() {
			sum += 1
		}, 100)
		var interval = 20
		var timer = setInterval(throttled, interval)
		var wait = 230
		var check1 = _.once(function(duration, timer) {
			setTimeout(function() {
				clearInterval(timer)
			}, 20)
			assert(duration > 200 + interval && duration < 300 + interval)
		})
		var timer2 = setInterval(function() {
			var duration = _.now() - start
			if (duration > 400 + interval) {
				assert(false)
			} else {
				if (4 == sum) {
					assert(duration > 300 + interval && duration < 400 + interval)
					clearInterval(timer2)
					done()
				} else if (3 == sum) {
					check1(duration, timer)
				}
			}
		}, 30)
	})
})
