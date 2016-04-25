var startTimer, posX, posY, bericht;
    
    function resetTimer() {
        startTimer = new Date().getTime();
    }
    
    
    function verwerkTouchstart(event) {
        resetTimer();
        posX = event.originalEvent.touches[0].pageX;
        posY = event.originalEvent.touches[0].pageY;
        bericht = "TS:" + startTimer + " x:" + posX + " y:" + posY;
        $("#logTouchstart").text($("#logTouchstart").text() + bericht + "\r\n");
    }
    function verwerkTouchend(event) {
        posX = event.originalEvent.changedTouches[0].pageX;
        posY = event.originalEvent.changedTouches[0].pageY;
        bericht = "TE:" + (new Date().getTime() - startTimer) + " x:" + posX + " y:" + posY;
        $("#logTouchend").text($("#logTouchend").text() + bericht + "\r\n");
    }
    
    
    $("#klikMij").on("touchstart", verwerkTouchstart);
    $("#klikMij").on("touchend", verwerkTouchend);


});