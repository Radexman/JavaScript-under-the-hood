const functionOne = () => {
	console.log('First Function');
	functionTwo();
};

const functionTwo = () => {
	console.log('Second Function');
	functionThree();
};

const functionThree = () => {
	console.log('Third Function');
};

functionOne();
