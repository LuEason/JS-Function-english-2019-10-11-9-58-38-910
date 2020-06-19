function palindrome(message){
    for(let i = message.length - 1; i >= 0; i--) {
      let j = message.length - 1 - i;
      if (i < j)  break;
      if (message[i] != message[j]) {
        console.log(false);
        return;
      }
    }
    console.log(true);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true	
