(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var name =names[i];
        var temp = name.charAt(0).toLocaleLowerCase();
        if(temp === 'j' && 'J' ){
            console.log(byeSpeaker.speak(name));
        }
        else {
            helloSpeaker.speak(name);
        }
    }
    })();