function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}


function sayHiToHeadphonedRoommate (string) {
    var cantAnswer = "I can't hear you!";
    var canAnswer = "YES INDEED!";
    var dinAnswer = 'I would love to!';
    if (string.toLowerCase(string) === string) {
      return cantAnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return canAnswer;
    }
    else if ("Let\'s have dinner together!" === string) {
      return dinAnswer
    }
}
