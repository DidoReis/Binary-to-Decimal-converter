function convert(){
	const binary = document.getElementById('input1').value;

	if(binary === '') return alert('Please Enter a binary number');
	binary.split('').map((char) =>{

		if(char !== '0' && char !== '1')return alert('Please, enter a binary number')

	});

	const decimal = parseInt(binary, 2);
	document.getElementById('input2').value = decimal;
	return true;

	
}