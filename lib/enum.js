class Enum {
	constructor(...strings) {
		Object.assign(this, strings.reduce((dict, cur, i) => ({...dict, [i]: cur, [cur]: i}), {}))
	}
}

module.exports = { Enum }