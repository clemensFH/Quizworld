window.onload = function () {
    const score = localStorage.getItem('mostRecentScore');
    const maxScore = localStorage.getItem('maxScore');
    const endScore = document.getElementById('end-score');
    const endNum = document.getElementById('end-num');

    endScore.innerText = `Score`;
    endNum.innerText = `${score} of ${maxScore}`; // Display the maxScore

    localStorage.removeItem('mostRecentScore');
    localStorage.removeItem('maxScore');
};

function backToGame() {
    window.history.back();
}

function backToStartquiz() {
    window.history.back();
    window.history.back();
}
