function initiate(){
  var get = document.getElementById('getlocation');
  get.addEventListener('click', getlocation);
}

function getlocation(){
  navigator.geolocation.getCurrentPosition(showinfo, showerror);
}

function showinfo(position){
	var location2 = document.getElementById('location2');
	  var data = '';
	  data += 'Latitude: ' + position.coords.latitude + '<br>';
	  data += 'Longitude: ' + position.coords.longitude + '<br>';
	  data += 'Accuracy: ' + position.coords.accuracy + 'mts.<br>';
	  location2.innerHTML = data;	

  var location = document.getElementById('location');
  var mapurl = 'http://maps.google.com/maps/api/staticmap?center=' + position.coords.latitude + ',' + position.coords.longitude + '&zoom=12&size=400x400&sensor=false&markers=' + position.coords.latitude + ',' + position.coords.longitude;
  location.innerHTML = '<img src="' + mapurl + '">';
}

function showerror(error){
  alert('Error: ' + error.code + ' ' + error.message);
}

addEventListener('load', initiate);