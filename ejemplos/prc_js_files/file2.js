var databox;

function initiate(){
  databox = document.getElementById('databox');
  var myfiles = document.getElementById('myfiles');
  myfiles.addEventListener('change', process);
}

function process(e){
  var files = e.target.files;
  databox.innerHTML = '';
  var myfile = files[0];
  if(!myfile.type.match(/image.*/i)){
    alert('insert an image');
  }else{
    databox.innerHTML += 'Name: ' + myfile.name + '<br>';
    databox.innerHTML += 'Size: ' + myfile.size + ' bytes<br>';
 
    var reader = new FileReader();
    reader.addEventListener('load', show);
    reader.readAsDataURL(myfile);   
  }
}

function show(e){
  var result = e.target.result;
  databox.innerHTML += '<img src="' + result + ' ">';
}
addEventListener('load', initiate);