window.onload = function () {
    const score = localStorage.getItem('mostRecentScore');
    const maxScore = localStorage.getItem('maxScore');
    const endScore = document.getElementById('end-score');
    const endNum = document.getElementById('end-num');

    endScore.innerText = `Score`;
    endNum.innerText = `${score} of ${maxScore}`; // Update with the appropriate values

    localStorage.removeItem('mostRecentScore');
    localStorage.removeItem('maxScore');
};
