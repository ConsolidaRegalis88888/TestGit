function generateNumber(){
    const num = Math.round(Math.random()*100);
    document.getElementById('text').textContent = num;
}
