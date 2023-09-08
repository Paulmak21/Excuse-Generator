window.onload = () => {
  document.querySelector('#btn').addEventListener("click",() => {
    document.querySelector('#the-excuse').innerHtml = generateExcuse();
  });
  console.log('Hello Rigo from the console!');
};

let generateExcuse = () => {
    
    let pronoun = ['A', 'The'];
    let subject = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pincone'];
    let action = ['took my', 'threw my', 'yelled at my', 'stole my', 'bit my'];
    let possetion = ['homework', 'toe', 'car', 'shoe'];
    let where = ['on street', 'in my house', 'in my driveway'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subIndx = Math.floor(Math.random() * subject.length);
    let actionIndx = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return pronoun[proIndx] + ' ' + subject[subIndx] + ' ' + action[actionIndx] + ' ' + possetion[possetionIndex] + ' ' + where[whereIndex];
};