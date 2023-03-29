const engine = require('.')

describe('Rules tests', () => {
	it('test under 100 USD', async () => {
		await expect(engine
			.run({ amount: 50 })
			.then(({ events }) => 
				events.map(event => event.params.message)[0]))
			.resolves.toBe('no points')
	})
	it('test 100 USD - 500 UDS', async () => {
		await expect(engine
			.run({ amount: 434 })
			.then(({ events }) => 
				events.map(event => event.params.message)[0]))
			.resolves.toBe('plus 100 points')
	})
	it('test 500 USD - 1000 USD', async () => {
		await expect(engine
			.run({ amount: 715 })
			.then(({ events }) => 
				events.map(event => event.params.message)[0]))
			.resolves.toBe('plus 500 points')
	})
	it('test more than 1000 USD', async () => {
		await expect(engine
			.run({ amount: 1400 })
			.then(({ events }) => 
				events.map(event => event.params.message)[0]))
			.resolves.toBe('plus 1000 points')
	})
});