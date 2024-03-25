function countDown(num) {
    while (num >=0) {
        console.log(num);
        num--;
    }
}
    
    function writeCards(names, item) {
        let messages = [];
        for (let i = 0; i < names.length; i++) {
            messages.push(`Thank you, ${names[i]}, for the wonderful ${item} gift!`);
     }
     return messages;
    }
