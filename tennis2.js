'use strict';

const SCORE_NAMES = ['Love', 'Fifteen', 'Thirty', 'Forty'];

function getScore(playerOneScore, playerTwoScore) {
    // Tie game situation
    if (playerOneScore === playerTwoScore) {
        if (playerOneScore < 3) {
            return `${SCORE_NAMES[playerOneScore]}-All`;
        } else {
            return "Deuce";
        }
    }

    // Advantage/Win situation
    if (playerOneScore >= 4 || playerTwoScore >= 4) {
        const scoreDifference = playerOneScore - playerTwoScore;
        if (Math.abs(scoreDifference) === 1) {
            return scoreDifference === 1 ? "Advantage player1" : "Advantage player2";
        } else {
            return scoreDifference >= 2 ? "Win for player1" : "Win for player2";
        }
    }
    
    // Regular scoring
    return `${SCORE_NAMES[playerOneScore]}-${SCORE_NAMES[playerTwoScore]}`;
}

module.exports = getScore;
