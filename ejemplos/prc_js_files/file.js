var databox;

function initiate(){
  databox = document.getElementById('databox');
  var myfiles = document.getElementById('myfiles');
  myfiles.addEventListener('change', process);
}

function process(e){
  var files = e.target.files;
  var myfile = files[0];
  var reader = new FileReader();
  reader.addEventListener('load', show);
  reader.readAsText(myfile);
}

function show(e){
  var result = e.target.result;
  databox.innerHTML = result;
}

addEventListener('load', initiate);

