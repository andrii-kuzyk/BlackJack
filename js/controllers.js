var BlackJackApp = angular.module('BlackJackApp', []);

BlackJackApp.controller('BlackJackCtrl', function ($scope) {
    var gameProcess = false;
    $scope.playersChips = [{'num':5, 'value':10, 'img': 'img/chips/10.png'},
                           {'num':5, 'value':20, 'img': 'img/chips/20.png'},
                           {'num':3, 'value':50, 'img': 'img/chips/50.png'},
                           {'num':2, 'value':100, 'img': 'img/chips/100.png'}];

    $scope.playersBet = [{ 'num':0, 'value':10, 'img': 'img/chips/10.png'},
                         { 'num':0, 'value':20, 'img': 'img/chips/20.png'},
                         { 'num':0, 'value':50, 'img': 'img/chips/50.png'},
                         { 'num':0, 'value':100, 'img': 'img/chips/100.png'}];

    var init = function() {
        $scope.cards = [{'img': 'img/cards/clubs10.png', 'points': 10, 'card': 'CT'},
                        {'img': 'img/cards/clubs2.png', 'points': 2, 'card': 'C2'},
                        {'img': 'img/cards/clubs3.png', 'points': 3, 'card': 'C3'},
                        {'img': 'img/cards/clubs4.png', 'points': 4, 'card': 'C4'},
                        {'img': 'img/cards/clubs5.png', 'points': 5, 'card': 'C5'},
                        {'img': 'img/cards/clubs6.png', 'points': 6, 'card': 'C6'},
                        {'img': 'img/cards/clubs7.png', 'points': 7, 'card': 'C7'},
                        {'img': 'img/cards/clubs8.png', 'points': 8, 'card': 'C8'},
                        {'img': 'img/cards/clubs9.png', 'points': 9, 'card': 'C9'},
                        {'img': 'img/cards/clubsA.png', 'points': 11, 'card': 'CA'},
                        {'img': 'img/cards/clubsJ.png', 'points': 10, 'card': 'CJ'},
                        {'img': 'img/cards/clubsK.png', 'points': 10, 'card': 'CK'},
                        {'img': 'img/cards/clubsQ.png', 'points': 10, 'card': 'CQ'},
                        {'img': 'img/cards/diamonds10.png', 'points': 10, 'card': 'DT'},
                        {'img': 'img/cards/diamonds2.png', 'points': 2, 'card': 'D2'},
                        {'img': 'img/cards/diamonds3.png', 'points': 3, 'card': 'D3'},
                        {'img': 'img/cards/diamonds4.png', 'points': 4, 'card': 'D4'},
                        {'img': 'img/cards/diamonds5.png', 'points': 5, 'card': 'D5'},
                        {'img': 'img/cards/diamonds6.png', 'points': 6, 'card': 'D6'},
                        {'img': 'img/cards/diamonds7.png', 'points': 7, 'card': 'D7'},
                        {'img': 'img/cards/diamonds8.png', 'points': 8, 'card': 'D8'},
                        {'img': 'img/cards/diamonds9.png', 'points': 9, 'card': 'D9'},
                        {'img': 'img/cards/diamondsA.png', 'points': 11, 'card': 'DA'},
                        {'img': 'img/cards/diamondsJ.png', 'points': 10, 'card': 'DJ'},
                        {'img': 'img/cards/diamondsK.png', 'points': 10, 'card': 'DK'},
                        {'img': 'img/cards/diamondsQ.png', 'points': 10, 'card': 'DQ'},
                        {'img': 'img/cards/hearts10.png', 'points': 10, 'card': 'HT'},
                        {'img': 'img/cards/hearts2.png', 'points': 2, 'card': 'H2'},
                        {'img': 'img/cards/hearts3.png', 'points': 3, 'card': 'H3'},
                        {'img': 'img/cards/hearts4.png', 'points': 4, 'card': 'H4'},
                        {'img': 'img/cards/hearts5.png', 'points': 5, 'card': 'H5'},
                        {'img': 'img/cards/hearts6.png', 'points': 6, 'card': 'H6'},
                        {'img': 'img/cards/hearts7.png', 'points': 7, 'card': 'H7'},
                        {'img': 'img/cards/hearts8.png', 'points': 8, 'card': 'H8'},
                        {'img': 'img/cards/hearts9.png', 'points': 9, 'card': 'H9'},
                        {'img': 'img/cards/heartsA.png', 'points': 11, 'card': 'HA'},
                        {'img': 'img/cards/heartsJ.png', 'points': 10, 'card': 'HJ'},
                        {'img': 'img/cards/heartsK.png', 'points': 10, 'card': 'HK'},
                        {'img': 'img/cards/heartsQ.png', 'points': 10, 'card': 'HQ'},
                        {'img': 'img/cards/spades10.png', 'points': 10, 'card': 'ST'},
                        {'img': 'img/cards/spades2.png', 'points': 2, 'card': 'S2'},
                        {'img': 'img/cards/spades3.png', 'points': 3, 'card': 'S3'},
                        {'img': 'img/cards/spades4.png', 'points': 4, 'card': 'S4'},
                        {'img': 'img/cards/spades5.png', 'points': 5, 'card': 'S5'},
                        {'img': 'img/cards/spades6.png', 'points': 6, 'card': 'S6'},
                        {'img': 'img/cards/spades7.png', 'points': 7, 'card': 'S7'},
                        {'img': 'img/cards/spades8.png', 'points': 8, 'card': 'S8'},
                        {'img': 'img/cards/spades9.png', 'points': 9, 'card': 'S9'},
                        {'img': 'img/cards/spadesA.png', 'points': 11, 'card': 'SA'},
                        {'img': 'img/cards/spadesJ.png', 'points': 10, 'card': 'SJ'},
                        {'img': 'img/cards/spadesK.png', 'points': 10, 'card': 'SK'},
                        {'img': 'img/cards/spadesQ.png', 'points': 10, 'card': 'SQ'}];

        $scope.dealerCardsList = [];//{'img': 'img/cards/back.png', 'points': 0, 'card': '00'}];
        $scope.playerCardsList = [];

        document.getElementById('playerCards').innerHTML = '';
        document.getElementById('dealerCards').innerHTML = '';//<img src="img/cards/back.png" class="card">';

        getCard($scope.dealerCardsList,'dealerCards', true);
        getCard($scope.dealerCardsList,'dealerCards');

        getCard($scope.playerCardsList, 'playerCards');
        getCard($scope.playerCardsList, 'playerCards');
    }

    var hiddenCard = '';

    var getCard = function(to, id, isDealerFirst) {
        var index = Math.floor((Math.random() * $scope.cards.length));
        to.push($scope.cards[index]);
        if (!isDealerFirst) {
            document.getElementById(id).innerHTML +=
                '<img src="' + $scope.cards[index].img + '" style="left:' + (to.length - 1) * 40 + 'px" class="card">';
        }
        else {
            document.getElementById(id).innerHTML +=
            '<img src="img/cards/back.png" style="left: 0px;" class="card">';
            hiddenCard = $scope.cards[index].img;
        }
        $scope.cards.splice(index,1);
    }

    $scope.hit = function() {
        getCard($scope.playerCardsList, 'playerCards');
        if (calcScore($scope.playerCardsList)>21) {
            gameOver();
            document.getElementById("dealerCards").firstChild.src=hiddenCard;
            modalWindow.show(window.innerWidth/3,"Dealer wins!");
        }
    }

    $scope.stand = function() {
        document.getElementById("dealerCards").firstChild.src=hiddenCard;
        while (calcScore($scope.dealerCardsList) < 17) {
            getCard($scope.dealerCardsList,'dealerCards');
        }
        if (compare()){
            modalWindow.show(window.innerWidth/3,"You win!");
            for (var index in $scope.playersChips) {
                $scope.playersChips[index].num += 2*$scope.playersBet[index].num;
            }
        }
        else {
            modalWindow.show(window.innerWidth/3,"Dealer wins!");
        }
        gameOver();
    }
    
    $scope.doubleDown = function() {
        for (var index in $scope.playersChips) {
            if ($scope.playersChips[index].num < $scope.playersBet[index].num) {
                modalWindow.show(window.innerWidth/3,"You don't have enough chips");
                return;
            }
        }
        for (var index in $scope.playersChips) {
            $scope.playersChips[index].num -= $scope.playersBet[index].num;
            $scope.playersBet[index].num *= 2;
        }
        $scope.hit();
        if (calcScore($scope.playerCardsList)<=21) $scope.stand();
    }

    var compare = function() {
        if (calcScore($scope.playerCardsList) == 21 && $scope.playerCardsList.length == 2) return 1;
        if (calcScore($scope.dealerCardsList) == 21 && $scope.dealerCardsList.length == 2) return 0;
        if (calcScore($scope.dealerCardsList) < calcScore($scope.playerCardsList) || calcScore($scope.dealerCardsList) >= 21) return 1
        else return 0;
    }

    var gameOver = function() {
        gameProcess = false;
        document.getElementsByClassName('button')[0].style.visibility = 'visible';
        document.getElementsByClassName('keys')[0].style.visibility = 'hidden';
        for (var index in $scope.playersBet) {
            $scope.playersBet[index].num = 0;
        }
    }

    var calcScore = function(of) {
        var score = 0;
        for (var index in of) {
            score += of[index].points;
        }
        if (score>21) {
            for (var index in of) {
                if (of[index].card[1] == 'A') {
                    score -= 10;
                }
            }
        }
        return score;
    }



    $scope.playersMoney = function() {
        var money = 0;
        for (var index in $scope.playersChips) {
            var chip = $scope.playersChips[index];
            money += (chip.value * chip.num);
        }
        return money;
    }
    
    $scope.playersBetCalc = function() {
        var money = 0;
        for (var index in $scope.playersBet) {
            var chip = $scope.playersBet[index];
            money += (chip.value * chip.num);
        }
        return money;
    }
    
    $scope.betAdd = function(index) {
        if ($scope.playersChips[index].num>0 && !gameProcess) {
            $scope.playersChips[index].num--;
            $scope.playersBet[index].num++;
        }
    }
    
    $scope.betSub = function(index) {
        if ($scope.playersBet[index].num>0 && !gameProcess) {
            $scope.playersBet[index].num--;
            $scope.playersChips[index].num++;
        }
    }
    
    $scope.play = function() {
        if ($scope.playersBetCalc()==0) {
            if ($scope.playersMoney() == 0) {
                modalWindow.show(window.innerWidth/3,"You haven't money! Start game again");
            }
            else {
                modalWindow.show(window.innerWidth/3, 'Make your bet');
            }
        }
        else {
            init();
            gameProcess = true;
            document.getElementById("dealerCardContainer").style.visibility = 'visible';
            document.getElementById("playerCardContainer").style.visibility = 'visible';
            document.getElementsByClassName('button')[0].style.visibility = 'hidden';
            document.getElementsByClassName('keys')[0].style.visibility = 'visible';
        }
    }

    var modalWindow = {
        _block: null,
        _win: null,

        initBlock: function() {
            _block = document.getElementById('blockscreen');

            //Если он не определен, то создадим его
            if (!_block) {
                var parent = document.getElementsByTagName('body')[0];
                var obj = parent.firstChild;
                _block = document.createElement('div');
                _block.id = 'blockscreen';
                parent.insertBefore(_block, obj);
                _block.onclick = function() { modalWindow.close(); }
            }
            _block.style.display = 'inline';
        },

        initWin: function(width, html) {
            _win = document.getElementById('modalwindow');
            if (!_win) {
                var parent = document.getElementsByTagName('body')[0];
                var obj = parent.firstChild;
                _win = document.createElement('div');
                _win.id = 'modalwindow';
                parent.insertBefore(_win, obj);
            }
            _win.style.width = width + 'px';
            _win.style.display = 'inline';

            _win.innerHTML = html;



            _win.style.left = '50%';
            _win.style.top = '50%';


            _win.style.marginTop = -(_win.offsetHeight / 2) + 'px';
            _win.style.marginLeft = -(width / 2) + 'px';
        },

        close: function() {
            document.getElementById('blockscreen').style.display = 'none';
            document.getElementById('modalwindow').style.display = 'none';
        },

        show: function(width, html) {
            modalWindow.initBlock();
            modalWindow.initWin(width, html);
        }
    }
});
