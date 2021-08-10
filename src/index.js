module.exports = function reverse (n) {
  
}

function reverse(n) {

	let nAbs = Math.abs(n);

	nAbs = toString(nAbs);
	let arr = Array.from(nAbs);
	for (let i = arr.length - 1; i--; i > 0) {
		let rev = arr.split("").reverse().join("");
	}
	return rev;
}
