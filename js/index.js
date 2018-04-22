var elementos = {}
elementos.dado = document.querySelector('#dado');
elementos.cartonUsuario = document.querySelector('.box1');
elementos.cartonCpu = document.querySelector('.box2');

var numsCarton = {
  usuario : [],
  cpu : []
}

var lista = _.shuffle(_.range(1,91));

function crearCarton() {
  numsCarton.usuario = _.shuffle(_.range(1,91)).slice(0,15);
  numsCarton.cpu = _.shuffle(_.range(1,91)).slice(0,15);

  //Carton Jugador
  for(var i = 0; i < 15; i++){
    let div = document.createElement('div');
    div.className = 'numero ' + 'numero'+numsCarton.usuario[i];
    div.textContent = numsCarton.usuario[i];
    elementos.cartonUsuario.appendChild(div);
  }
  //Carton CPU
  for(var i = 0; i < 15; i++){
    let div = document.createElement('div');
    for(var j = 0; j < 15; j++){
      //let div = document.createElement('div');
      if(numsCarton.usuario[i] == numsCarton.cpu[j]){
        div.className = 'numero ' + 'numero'+numsCarton.cpu[i] + 'numero 2';
      } else {
        div.className = 'numero ' + 'numero'+numsCarton.cpu[i];
        div.textContent = numsCarton.cpu[i];
        elementos.cartonCpu.appendChild(div);
      }
    }
  }
}

crearCarton();

function quitarNum(num) {
    _.pull(numsCarton.usuario,num);
    _.pull(numsCarton.cpu,num);
}

function seek(num){
  let marca = '';
  for(var i = 0; i < 15; i++){
    if(num == numsCarton.usuario[i] || num == numsCarton.cpu[i]){
      marca = String('.numero'+num);
      quitarNum(num);
      let marcaClass = document.querySelector(marca);
      marcaClass.style.background = 'red';
    }
  }
}

  //for(var i = 0; i < 15; i++){
    //if(num == numsCarton.cpu[i]){
      //marca = String('.numero'+num);
      //quitarNum(num);
      //let marcaClass = document.querySelector(marca);
      //marcaClass.style.background = 'red';
    //}
  //}


function ganador(){
  if(numsCarton.usuario.length == 0){
    alert('Ha ganado el Usuario');
  }else{
    if(numsCarton.cpu.length == 0){
      alert('Ha ganado la cpu');
    }
  }
}

function boton() {
  let num = lista[Math.floor((Math.random() * 90) + 1)];
  elementos.dado.textContent = num;
  seek(num);
  ganador();
}
