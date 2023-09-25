function initiate() {
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
}

function newitem() {
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('text').value;
	sessionStorage.setItem(keyword, value);

	//show(keyword);
	show2();
}

function show(keyword) {
	var databox = document.getElementById('databox');
	var value = sessionStorage.getItem(keyword);
	databox.innerHTML = '<div>' + keyword + ' - ' + value + '</div>';
}

function show2(){
	  var databox = document.getElementById('databox');
	  databox.innerHTML = '';
	  for(var f = 0; f < sessionStorage.length; f++){
	    var keyword = sessionStorage.key(f);
	    var value = sessionStorage.getItem(keyword);
	    databox.innerHTML += '<div>' + keyword + ' - ' + value + '</div>';
	  }
	}

addEventListener('load', initiate);