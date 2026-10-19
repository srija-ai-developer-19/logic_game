let emojis = ["🍔","🍕","🍟","🍩","🍔","🍕","🍟","🍩","🍦","🌮","🍦","🌮","🍣","🍰","🍣","🍰"];
let board = document.getElementById('gameBoard');
let moves = 0;
let matched = 0;
let firstCard = null;
let secondCard = null;
let lock = false;

function shuffle(array){
  return array.sort(()=> Math.random() - 0.5);
}

function startGame(){
  board.innerHTML = "";
  moves = 0;
  matched = 0;
  firstCard = null;
  secondCard = null;
  document.getElementById('moves').innerText = moves;
  document.getElementById('matched').innerText = matched + "/8";
  
  let shuffled = shuffle([...emojis]);
  
  shuffled.forEach((emoji, index)=>{
    let div = document.createElement('div');
    div.className = "card-box";
    div.dataset.emoji = emoji;
    div.dataset.index = index;
    div.innerText = "❓";
    div.onclick = ()=> flipCard(div);
    board.appendChild(div);
  });
}

function flipCard(card){
  if(lock || card.classList.contains('open') || card.classList.contains('matched')) return;
  
  card.innerText = card.dataset.emoji;
  card.classList.add('open');
  
  if(!firstCard){
    firstCard = card;
  } else {
    secondCard = card;
    moves++;
    document.getElementById('moves').innerText = moves;
    lock = true;
    
    // LOGIC: Check if both emojis match
    if(firstCard.dataset.emoji === secondCard.dataset.emoji){
      // Match ayindi
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      matched++;
      document.getElementById('matched').innerText = matched + "/8";
      resetTurn();
      
      if(matched === 8){
        setTimeout(()=> alert(`🎉 Win ayyavu Srija! Moves: ${moves}`), 300);
      }
    } else {
      // Match kaledu
      setTimeout(()=>{
        firstCard.innerText = "❓";
        secondCard.innerText = "❓";
        firstCard.classList.remove('open');
        secondCard.classList.remove('open');
        resetTurn();
      }, 800);
    }
  }
}

function resetTurn(){
  firstCard = null;
  secondCard = null;
  lock = false;
}

startGame();