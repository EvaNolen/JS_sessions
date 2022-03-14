//delete all
$('#clear').click(function (){
	memory = 0;
	$('#screen').val("0");
});

//change sign (+ to - and otherwise)
$('#sign').click(function (){
	$('#screen').val($('#screen').val() * -1);
});

//delete last number
$('#backspace').click(function (){
	let len = $('#screen').val().length;
$('#screen').val($('#screen').val().substring(0, len -1));
	if($('#screen').val().length == 0)
		$('#screen').val(0);
});



function insertCharacter(char) {
	let currentValue = $('.inputDisplay').val();
	let length = currentValue.length;
	let flag = false;
	if(char == '+' || char == '-' || char == '*' || char == '/')
	flag = true;
	if(length == 0)
	{
		if(flag)
		return;
	}
	let flagNew = false;
	let lastCharacter = currentValue[length-1];
	if(lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/')
	flagNew = true;
	if(flag && flagNew)
	$('.inputDisplay').val(currentValue.substring(0,length-1) + char);
	else
	$('.inputDisplay').val($('.inputDisplay').val() + char);
}

function clearInput() {
	$('.inputDisplay').val('');
}

function result() {
	let currentValue = $('.inputDisplay').val();
	let length = currentValue.length;
	let flag = false;
	let char = currentValue[length-1];
	if(char == '+' || char == '-' || char == '*' || char == '/')
	flag = true;
	if(flag)
		$('.inputDisplay').val("ERROR!");
	else
		$('.inputDisplay').val(eval($('.inputDisplay').val()));
}