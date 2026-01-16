const scene0 = document.getElementById("scene0");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");

const blue = new Audio("audio/blue.mp3");
blue.loop = true;

// INTRO → CAKE
setTimeout(()=>{
  scene0.classList.add("hidden");
  scene1.classList.remove("hidden");
  blue.play();
}, 2000);

// CAKE CLICK
cakeVideo.onclick = () => {
  scene1.classList.add("hidden");
  scene2.classList.remove("hidden");
};

// NO BUTTON
noBtn.onclick = () => {
  runner.classList.remove("hidden");
  noBtn.style.display = "none";
};

// YES BUTTON
yesBtn.onclick = () => {
  document.querySelector(".choice").style.display = "none";
  gift.classList.remove("hidden");
};

// OPEN GIFT
gift.onclick = () => {
  scene2.innerHTML = "";
  scene2.classList.add("hidden");
  scene3.classList.remove("hidden");
  typeWish();
};

// TYPE WISH
function typeWish(){
  const text = `HAPPY BIRTHDAYY CHIKUU ❤️
Today isn’t about big celebrations.
It’s about you.

The way you care.
The way you stay strong even when things are quiet.
The way you matter, simply by being here.

You don’t have to change.
You don’t have to prove anything.
Who you are — right now — is already enough.

I hope this year holds you gently.
I hope it brings small joys, peaceful moments,
and the feeling of being understood.

And whenever you forget your worth,
I hope you’re reminded
that you are loved, appreciated,
and never alone.

🤍`;

  let i = 0;
  wishText.innerHTML = "";

  const t = setInterval(()=>{
    wishText.innerHTML += text.charAt(i++);
    if(i >= text.length) clearInterval(t);
  }, 40);
}

// NEXT → BOUQUET
nextToBouquet.onclick = () => {
  scene3.classList.add("hidden");
  scene4.classList.remove("hidden");
};

// STOP MUSIC HERE
finalNext.onclick = () => {
  blue.pause();
  scene4.classList.add("hidden");
  scene5.classList.remove("hidden");
  saeVideo.play();
};
