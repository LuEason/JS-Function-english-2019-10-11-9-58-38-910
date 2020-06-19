function reverseString(message){
  let result = '';
  for(let i = message.length - 1; i >= 0; i--) {
    result += message[i];
  }
  console.log(result);
}
reverseString('hello');
