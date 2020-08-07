//we using the counter variable for counting (upvote or upcounting+ or downvote or downcounting-)

let counter = 0;

function upvote() {
    counter = counter + 1;
    document.getElementById("votes").innerHTML = counter + "votes";
}
//the upvote button contains the calling function //onclick=....



//downvote function

function downvote() {
    counter = counter - 1;
    document.getElementById("votes").innerHTML = counter + "votes";
}
//the downvote button conatins the calling function