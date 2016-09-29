function MultiplicatorUnitFailure() {
	this.message = "Multiplication failure. Retrying.";
	this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5)
		return a * b;
	else
		throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
	// my code here

	try {
		return primitiveMultiply(a, b);
	} catch (e) {
		if (e instanceof MultiplicatorUnitFailure) {
			console.log(e.message);	
			return reliableMultiply(a, b);
		} else {
			console.log(e.message);
		}
	}
}

console.log(reliableMultiply(8, 8));
