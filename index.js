// Code your solutions in this file

function writeCards(array, event){
    let thankCard = []
    for (let i=0; i<array.length; i++){
  thankCard.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)}
  return thankCard;
}

function countDown(num){
    let i = num;
    while (i > 0){
        console.log(i);
        i = i - 1;
        }
    console.log(i);
}