let player;


//oncall for Youtube API

function onYouTubeIframeAPIReady() {
  player = new YT.Player('firstinteractivevid', {
    height: '360',
    width: '640',
    videoId: 'XGnukFxdSxU', 
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  console.log("player is ready");
}


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    console.log("ended");
    reverseanimate(); 
  }

  if (event.data == YT.PlayerState.PLAYING) {
    console.log("playing");
    animate();
  }
}


//navbarselector logic

const nav1btn = document.querySelector("#navbarbutton1");
const nav2btn = document.querySelector("#navbarbutton2");
const nav3btn = document.querySelector("#navbarbutton3");
const nav4btn = document.querySelector("#navbarbutton4");

nav1btn.style.display = "none";
nav2btn.style.display = "none";
nav3btn.style.display = "none";
nav4btn.style.rotate = "0deg";

nav1btn.style.opacity = "0";
nav2btn.style.opacity = "0";
nav3btn.style.opacity = "0";


function show(test){
    let testfunction = document.querySelector("#navbarbutton"+ test);
    console.log(testfunction);
}
function open(){
    if(nav1btn.style.display != "flex"){

    nav1btn.style.display = "flex";
    nav2btn.style.display = "flex";
    nav3btn.style.display = "flex";
    nav4btn.style.rotate = "90deg";

    nav1btn.style.opacity = "1";
    nav2btn.style.opacity = "1";
    nav3btn.style.opacity = "1";


    } else{

    nav1btn.style.display = "none";
    nav2btn.style.display = "none";
    nav3btn.style.display = "none";

    nav1btn.style.opacity = "0";
    nav2btn.style.opacity = "0";
    nav3btn.style.opacity = "0";
    nav4btn.style.rotate = "0deg";

    }
}

nav1btn.addEventListener("click", function(){
    show(1);
});
nav2btn.addEventListener("click", function(){
    show(2);
});
nav3btn.addEventListener("click", function(){
    show(3);
});
nav4btn.addEventListener("click",function(){
    show(4);
    open();
});




//video animation logic

const video = document.querySelector(".firstinteractive");
const decoration = document.getElementsByClassName("decoration");
const detect = document.querySelector("#firstinteractivevid");

video.addEventListener("click", function(){
    animate();
});

detect.addEventListener("ended", function(){
    reverseanimate();
});


function animate(){
    console.log("video click register");
    
    for(let i = 0; i < 3; i++){
        decoration[i].style.animationPlayState = "running";
    }
    setTimeout(player.playVideo(), 1000);
    
   
}
function reverseanimate(){
    console.log("video reverse");
    for(let i = 0; i < 3; i++){
        decoration[i].style.animation = "videosummon-reverse 4s";
        decoration[i].style.animationPlayState = "running";
    }
    
}






//video display logic for part 2

const selectorhandler = document.querySelector(".secondinteractive");
const embed = document.querySelectorAll(".embedr");

for(let i = 0; i <3; i++){
        embed[i].style.display = "none";
    }

function videoswitch(number){

    let selfvideo = document.querySelector("#video" + number);
    console.log(number);

    for(let i = 0; i <3; i++){
        embed[i].style.display = "none";
    }

    switch(number){
        case 1: selfvideo.style.display = "block";
                break;
        case 2: selfvideo.style.display = "block";
                break;
        case 3: selfvideo.style.display = "block";
                break;
    }
}

selectorhandler.addEventListener("click", function(event){
    console.log(event.target.id);
    switch(event.target.id){
        case "firsttag":
        videoswitch(1);
        break;
        case "secondtag":
        videoswitch(2);
        break;
        case "thirdtag":
        videoswitch(3);
        break;
    }

    
});


    






//pagescroll logic for minigame

const excerpt1database = [
    

    `And then there was Rarity. The sight of her gorgeous mane and sparkling eyes nearly broke my concentration as she paused on her way to the general store to listen to me. “My, what a heavenly tune!” were her exact words. She dropped three whole bits into the jar, more than anypony else. I always feel bad when that happens, but a part of me thinks that Rarity needs to be generous more than other ponies need to experience her generosity.

    So, I played my part, especially when she leaned forward with sympathetic eyes to say, “But dear, you look positively freezing! Tell me, are you ill?” It was true. My teeth were chattering, and—no—it wasn't an act. When the chills come, there's very little I can do to stop them.`,

    `My hoodie has always been a first line of defense against the inexplicable side effects of this curse. I can't even pretend to explain that to any of the ponies I meet. If I bundle up like my shivering body silently screams at me to, then even more ponies than Rarity would stop to ask me the same question over and over again.

    “Oh, I'm perfectly fine, ma'am,” I remember replying to her. I usually don't respond while I'm in the middle of performing, but I'm a unicorn who can afford to multi-task. “My blood temperature is just lower than the average pony's.” It was a lie. But, relatively speaking, everything I say to these villagers is a lie. After all, even when it's the truth, it has the same effect on them.`,

    `“Well, I cannot stand to see a gifted musician such as yourself freeze to death!” Rarity said. Then she did something that I should have predicted. She reached into her saddlebag and produced a yellow scarf. “Here, darling. Keep it as long as you like.” Her smile sparkled as much as the glowing telekinesis she used to float the golden article my way. Clearly I didn't have a choice in the matter. That didn't make accepting her gift any easier.

    “Oh, thank you, ma'am.” I smiled and paused in playing the elegy to wrap the scarf about my neck. To attempt a polite refusal would have been too complicated at the time. “You're too kind.”

    “Oh, I can make a hundred more like it back at my boutique. Besides, yellow is not my color—but it does match your eyes delightfully so.” Rarity smiled. Some beautiful faces last forever in the mind's eye. Rarity’s is no exception.`,

    `“You should stop by sometime. I can make you a new sweaterjacket. Yours is nice, of course, but I daresay it's starting to look worn-in.”

    I giggled and smiled. “Thanks. I'll think about it.”

    “You do that!” Rarity trotted off, humming her own whimsical version of the tune I was playing. She disappeared into the front entrance of the general store across the way.

    I continued playing my music, warmed more by the sincerity of Rarity's generosity than the actual thickness of the scarf that she had given me.`,

    `The afternoon was drifting by. A crimson glow gave the many coats of ponies a bright shine as the Sun lowered towards the Western horizon. I must have played the Lunar Elegy ten times before I saw Rarity trotting back with a full saddlebag of newly bought things.

    I can't lie. My heart sank a little when she immediately strolled my way and dropped three golden bits into my jar.

    “My, what a heavenly tune!” she said, then leaned towards me. “But dear, you look positively freezing! Tell me, are you ill?”

    It was a little harder to smile this time. Nevertheless, I murmured gently above the melody I was still making, “Oh, I'm perfectly fine, ma'am.” I couldn't help but add with a wink, “As a matter of fact, a very kind mare gave me this scarf just an hour ago.”`,

    `“Well, she must be a pony of exceptional taste!” Rarity said with avid admiration. “It does match your eyes delightfully so. You should stop by my boutique sometime. I can make you a new sweaterjacket. Yours is nice, of course, but—”

    “It looks worn-in?”

    “Yes! I was just about to say that!” Rarity exclaimed, her breath escaping her in a gasp. “Do you also read minds besides playing such gorgeous music?”

    “Something like that,” I said. “I'll be sure to drop by your lovely boutique someday, ma'am.”

    “You do that.” And she was gone, once more humming, once more an elegant and care-free stranger.`
    
];

let currentpage = 0;
const leftarrowhead = document.querySelector("#left");
const rightarrowhead = document.querySelector("#right");

function flip(page){

    let pagepull = document.querySelector(".excerpt1p");
    currentpage = page;
    if(page >= 0 && page < excerpt1database.length){
        pagepull.innerHTML = excerpt1database[page];
    }
    updatebuttons();
}

leftarrowhead.addEventListener("click",function(){
    flip(currentpage - 1);
});

rightarrowhead.addEventListener("click",function(){
    flip(currentpage + 1);
});

function updatebuttons() {
    leftarrowhead.disabled = currentpage === 0;
    rightarrowhead.disabled = currentpage === excerpt1database.length - 1;
}


//check function 

const correct = document.querySelector("#option2");
const submission = document.querySelector("#submission");
const submissionfield = document.querySelector("#submissionfield");
const reply = document.querySelector("#reply");

submission.addEventListener("click", function(){
    check();
});

function check(){
    if(submissionfield.value == correct.value){
        reply.innerHTML = "Correct!";
    } else {
        reply.innerHTML = "You suck!";
    }
}


//pagescroll function for subtopic 3

const excerpt2database = [
    `Cassia:  
    *cough*—  
    Phew. That woman nearly got me—`,

    `???:  
    C-Cassia? I've been looking for you forever!  
    Where'd you run off to earlier?`,

    `Cassia:  
    Lucilla?  
    *Footsteps approach*  
    What are you doing here, child?`,

    `Lucilla:  
    The city unit framework needs servicing; it's a standard combat duty.  
    But... look at the beacon tower... What happened inside the city?`,

    `Cassia:  
    The Seaborn have broken into Milliarium. That tower has become one of their nests.  
    Leave this to me. You should get out of here, quick.`,

    `Lucilla:  
    It's too risky. I'll stay here with you.`,

    `Cassia:  
    No need to—Urgh.`,

    `Lucilla:  
    Are you hurt?!`,

    `Cassia:  
    Yes.`,

    `Lucilla:  
    It must have been the Seaborn as you came over—  
    Wait, no, a scratch like this couldn't be left by a Seaborn...  
    Did someone attack you?`,

    `Cassia:  
    *cough*!`,

    `*Cassia approaches the nearby pipes.*  
    Lucilla:  
    Wait, why are you pulling out the safety valve?  
    Hey, don't push it! It'll cut off the ground level self-diagnostic system...  
    No, you know that way better than I do...`,

    `*Lucilla steps back.*  
    Lucilla:  
    You've been trying to do this all along, Cassia?  
    Are you... with the Church of the Deep?`,

    `Lucilla:  
    ......  
    When the Sea Patrol investigated Tullia, you turned them against her?  
    Don't tell me it was you who made her disappear—  
    What's this you've put on my neck?`,

    `Cassia:  
    Longbeard combtooth grass.  
    Something made by a friend in charge of raising roadside coral.  
    Don't move. You'll die if its bristles pierce your skin. Quite painfully, if I may add.`,

    `Cassia: 
    Now—*cough*—Leave this place, child.  
    Once it senses you've gone far enough, it'll fall off by itself.  
    You want to leave, don't you?`,

    `Cassia:  
    To be honest, before we became coworkers,  
    I happened to see your assessment at the Institute of Development Planning.`,

    `Lucilla:  
    ......`,

    `Cassia:  
    You care so much about that data scientist  
    because you've never forgotten that evacuation of Milliarium, have you?  
    You watched the distant lights of the volcanic power station go out,  
    surrounded in darkness, with only strange rumbles carried to you by the currents...`,

    `Cassia:  
    The ocean as it once was.  
    At that moment, you were the closest to the ocean out of all of Milliarium.  
    You, standing at the mezzanine of the dome, all alone.`,

    `Cassia:  
    The IDP said the psychological burden was too great.  
    That’s why they agreed to transfer you from the dome system to ground level.  
    Your so-called "fear of heights" was just a little joke of yours.`,

    `Cassia:  
    I'm afraid even you don't realize what lies deep within your heart.`,

    `Lucilla:  
    ......`,

    `Cassia:  
    The remaining Seaborn will soon discover that this route is still open.  
    You wouldn’t want to meet them again.  
    Go, quickly, before it’s too late.`,

    `Lucilla:  
    ......`
];

let currentpage2 = 0;
const leftarrowhead2 = document.querySelector("#left2");
const rightarrowhead2 = document.querySelector("#right2");

function flip2(page2){

    let pagepull2 = document.querySelector(".excerpt2");
    currentpage2 = page2;
    if(page2 >= 0 && page2 < excerpt2database.length){
        pagepull2.innerHTML = excerpt2database[page2];
    }
    updatebuttons();
}

leftarrowhead2.addEventListener("click",function(){
    flip2(currentpage2 - 1);
});

rightarrowhead2.addEventListener("click",function(){
    flip2(currentpage2 + 1);
});




//audioplayer logic

const playbutton = document.querySelector("#play");
const audio = document.querySelector("#neurosong");

document.addEventListener("DOMContentLoaded", function(){



    console.log("Audio loaded");

        setInterval(function(){
            audiodisplay(audio);
        }, 500);
    });




function audiodisplay(audio){
    if(!isNaN(audio.duration)){
        var percent = (audio.currentTime / audio.duration) * 100;
        document.querySelector("#songselector").style.left = percent + "%";
    }
}

playbutton.addEventListener("click", function(){
    if(audio.paused != true){
        audio.pause();
    } else {
    audio.play();
    }
});

//interactive game for subtopic 3

const databaserandom = 
[
    "echo", "flame", "wander", "crimson", "fog", "whisper", "lunar", "sapphire", "fracture", "ember",
  "glimmer", "vault", "thunder", "serene", "collapse", "glide", "ripple", "quartz", "static", "veil",
  "howl", "arcane", "gloom", "clutch", "sprawl", "harvest", "solstice", "grit", "pulse", "snare",
  "twilight", "glisten", "raven", "hollow", "tempest", "cradle", "phantom", "drift", "crash", "mirth",
  "shiver", "blight", "quiver", "flare", "ashen", "murk", "bloom", "shard", "vault", "glow",
  "plunge", "sting", "tangle", "flicker", "veil", "tremble", "vortex", "wither", "spark", "slumber",
  "brim", "hatch", "tide", "dusk", "stride", "latch", "chime", "swirl", "grasp", "bleed",
  "drench", "swathe", "ignite", "haze", "crack", "gnarl", "rattle", "glint", "hush", "shade",
  "nestle", "yearn", "rush", "blaze", "echoes", "snarl", "burrow", "twine", "roam", "crest",
  "smolder", "swoop", "glare", "lurch", "skitter", "groan", "shroud", "trail", "vaulted", "slant"
];

const buttonsubmit = document.querySelector("#startgame");
const randomprompt = document.querySelector("#prompt");
const timerdiv = document.querySelector("#timer");
const submitgame = document.querySelector("#submitgame");

let timer = 300;
let timerint;

let wordselect = [];

function randomwordgen(){
    wordselect.length = 0;
    for(let i = 0; i < 2; i++){
        
        let randomnum = Math.floor(Math.random() * (101-i));

        wordselect.push(databaserandom[randomnum]);

        let wordremove = databaserandom.splice(randomnum,1);

        console.log("removed" + wordremove);
        console.log("words"+ wordselect );

    }
}

function wordinsert(wordselect){

    randomprompt.innerHTML = "Generate a story, using the words:" + " " + wordselect;
}


function timerfunc(){

    let minutes = Math.floor(timer /60);
    let second = timer % 60;

    console.log(minutes + second);
    timerdiv.innerHTML = minutes + ":" + second;
    timer -= 1;

}


buttonsubmit.addEventListener("click", function(){

    randomwordgen();

    document.querySelector("#submissionarea").disabled = false;
    document.querySelector("#submissionarea").value = " "
    wordinsert(wordselect);


    
    timerint = setInterval(timerfunc,1000);
    
});
submitgame.addEventListener("click",function(){

    clearInterval(timerint);
    document.querySelector("#submissionarea").disabled = true;
});




