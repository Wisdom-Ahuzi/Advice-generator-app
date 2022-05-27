const shadow = document.querySelector('.img');
const advice = document.querySelector('#getadvice');
const identifier = document.querySelector('#identifier');

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
}

shadow.addEventListener('click', () => {
    shadow.classList.add('shadow');
    setTimeout(() => {
        shadow.classList.remove('shadow');
    }, 700);
    const test = getAdvice().then(data => {
        advice.innerText = data.slip.advice;
        identifier.innerText = data.slip.id;
    }).catch(err => {
        console.log('rejected', err.message);
    });
});



