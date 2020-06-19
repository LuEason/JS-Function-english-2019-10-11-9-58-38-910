function alphabetSort(message){
  let messageArray = [];
  for (let i = 0; i < message.length; i++) {
    messageArray.push(message[i]);
  }
  for (let i = 1; i < messageArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (messageArray[i] < messageArray[j]) {
        let temp = messageArray[i];
        messageArray[i] = messageArray[j];
        messageArray[j] = temp;
      }
    }
  }
  message = '';
  for (let i = 0; i < messageArray.length; i++) {
    message += messageArray[i];
  }
  console.log(message);
}
alphabetSort('hello'); // should return 'ehllo'
