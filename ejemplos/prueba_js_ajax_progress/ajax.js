var databox;

function initiate(){
  databox = document.getElementById('databox');
 
  var button = document.getElementById('button');
  button.addEventListener('click', read);
}

function read(){
  //var url = "www.minkbooks.com/content/trailer.ogg";
  var url = "trailer.ogg";
  var request = new XMLHttpRequest();
  request.addEventListener('loadstart', start);
  request.addEventListener('progress', status);
  request.addEventListener('load', show);
  request.open("GET", url, true);
  request.send(null);
}

function start(){
  databox.innerHTML = '<progress value="0" max="100">0%</progress>';
}

function status(e){
  if(e.lengthComputable){
    var per = parseInt(e.loaded / e.total * 100);
    var progressbar = databox.querySelector("progress");
    progressbar.value = per;
    progressbar.innerHTML = per + '%';
  }
}

function show(e){
  var data = e.target;
  if(data.status == 200){
    databox.innerHTML = 'Done';
  }
}
addEventListener('load', initiate);
