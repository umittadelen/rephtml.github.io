grecaptcha.enterprise.ready(function() {
    grecaptcha.enterprise.execute('6LePZ-sjAAAAAC4gg7vmlk1487aOlrk-3QrRuO_9', {action: 'login'}).then(function(token) {
        document.getElementById("website").style.display="block";
        document.getElementById("botcheck").style.display="none";
    });
});