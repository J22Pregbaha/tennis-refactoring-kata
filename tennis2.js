'use strict';

const SCORE_NAMES = ['Love', 'Fifteen', 'Thirty', 'Forty'];

function getScore(PlayerOneScore, playerTwoScore) {
    let score = "";

    if (PlayerOneScore === playerTwoScore && PlayerOneScore < 3) {
        if (PlayerOneScore === 0) {
            score = "Love";
        }
        if (PlayerOneScore === 1) {
            score = "Fifteen";
        }
        if (PlayerOneScore === 2) {
            score = "Thirty";
        }
        score += "-All";
    }
    if (PlayerOneScore === playerTwoScore && PlayerOneScore > 2) {
        score = "Deuce";
    }

    var P1res;
    var P2res;
    if (PlayerOneScore > 0 && playerTwoScore === 0) {
        if (PlayerOneScore === 1) {
            P1res = "Fifteen";
        }
        if (PlayerOneScore === 2) {
            P1res = "Thirty";
        }
        if (PlayerOneScore === 3) {
            P1res = "Forty";
        }

        P2res = "Love";
        score = P1res + "-" + P2res;
    }
    if (playerTwoScore > 0 && PlayerOneScore === 0) {
        if (playerTwoScore === 1) {
            P2res = "Fifteen";
        }
        if (playerTwoScore === 2) {
            P2res = "Thirty";
        }
        if (playerTwoScore === 3) {
            P2res = "Forty";
        }

        P1res = "Love";
        score = P1res + "-" + P2res;
    }

    if (PlayerOneScore > playerTwoScore && PlayerOneScore < 4) {
        if (PlayerOneScore === 2) {
            P1res = "Thirty";
        }
        if (PlayerOneScore === 3) {
            P1res = "Forty";
        }
        if (playerTwoScore === 1) {
            P2res = "Fifteen";
        }
        if (playerTwoScore === 2) {
            P2res = "Thirty";
        }
        score = P1res + "-" + P2res;
    }
    if (playerTwoScore > PlayerOneScore && playerTwoScore < 4) {
        if (playerTwoScore === 2) {
            P2res = "Thirty";
        }
        if (playerTwoScore === 3) {
            P2res = "Forty";
        }
        if (PlayerOneScore === 1) {
            P1res = "Fifteen";
        }
        if (PlayerOneScore === 2) {
            P1res = "Thirty";
        }
        score = P1res + "-" + P2res;
    }

    if (PlayerOneScore > playerTwoScore && playerTwoScore >= 3) {
        score = "Advantage player1";
    }

    if (playerTwoScore > PlayerOneScore && PlayerOneScore >= 3) {
        score = "Advantage player2";
    }

    if (PlayerOneScore >= 4 && playerTwoScore >= 0 && (PlayerOneScore - playerTwoScore) >= 2) {
        score = "Win for player1";
    }
    if (playerTwoScore >= 4 && PlayerOneScore >= 0 && (playerTwoScore - PlayerOneScore) >= 2) {
        score = "Win for player2";
    }
    return score;
}

module.exports = getScore;
