const list = document.getElementById('list');

for(let i = 1; i <= 100; i++) {
  //A chaque itération on crée un nouvel element "li"
  const item = document.createElement("li");
  if (i%3 === 0 && i%5 === 0) {
    item.innerHTML = 'Mindperf';
    item.classList.add('green');
  } else if (i%3 === 0) {
    item.innerHTML = 'Mind';
    item.classList.add('red');
  } else if (i%5 === 0) {
    item.innerHTML = 'perf';
    item.classList.add('violet');
  } else {
    item.innerHTML = i.toString();
    item.classList.add('blue');
  }

  list.appendChild(item);
}