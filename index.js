const { Engine } = require('json-rules-engine')


/**
 * Setup a new engine
 */
let engine = new Engine()

// define a rules
engine.addRule({
	conditions: {
		all: [
			{
				fact: 'amount',
				operator: 'lessThan',
				value: 100
			}
		]
	},
	event: {
		type: 'resultPoint',
		params: {
			message: 'no points'
		}
	}
})
engine.addRule({
	conditions: {
		all: [
			{
				fact: 'amount',
				operator: 'greaterThanInclusive',
				value: 100
			},
			{
				fact: 'amount',
				operator: 'lessThan',
				value: 500
			}
		]
	},
	event: {
		type: 'resultPoint',
		params: {
			message: 'plus 100 points'
		}
	}
})
engine.addRule({
	conditions: {
		all: [
			{
				fact: 'amount',
				operator: 'greaterThanInclusive',
				value: 500
			},
			{
				fact: 'amount',
				operator: 'lessThan',
				value: 1000
			}
		]
	},
	event: {
		type: 'resultPoint',
		params: {
			message: 'plus 500 points'
		}
	}
})
engine.addRule({
	conditions: {
		all: [
			{
				fact: 'amount',
				operator: 'greaterThanInclusive',
				value: 1000
			},

		]
	},
	event: {
		type: 'resultPoint',
		params: {
			message: 'plus 1000 points'
		}
	}
})

module.exports = engine
