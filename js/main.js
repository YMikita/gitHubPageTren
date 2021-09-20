(function(w) {
    w.onload = function() {
        el = document.getElementById('jjj');
        setInterval(function() {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            
            el.innerHTML = dateTime;
        }, 1000)
    }
})(window)