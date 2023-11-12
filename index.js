//Top Card buttons
const accountButton = document.getElementById("profile-settings");
const previewAccount = document.getElementById("profile-preview");
const profileSearch = document.getElementById("profile-search");
const profileAnalytics = document.getElementById("profile-analytics");

//middle card buttons
const contactInfo = document.getElementById("contact-info");
const socialLinks = document.getElementById("social-links");
const skillView = document.getElementById("skills-view");
const portfolioView = document.getElementById("portfolio-view");

//Bottom Card Buttons
const messageButton = document.getElementById("message");
const followButton = document.getElementById("follow");

//Modal
const modal = document.getElementById("account-modal");
const closeBtn = document.getElementById("close-btn");

const allButtons = document.getElementsByTagName("button");

accountButton.onclick = function () {
  modal.style.display = "flex";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

document.getElementById("color-btn").addEventListener("click", () => {
  document.getElementById("bg-color-picker").click();
});

document
  .getElementById("bg-color-picker")
  .addEventListener("input", (event) => {
    const color = event.target.value;
    document.body.style.setProperty("--main-bg-color", color);
  });

console.error(
  "change the body height back to 100vh after completing all modals!"
);

function buttonClickEventFactory(button, clickHandler) {
  button.addEventListener("click", () => clickHandler());
}

function playGrantedSound() {
  document.getElementById("granted-sound").play();
}

function playDeniedSound() {
  document.getElementById("denied-sound").play();
}

buttonClickEventFactory(previewAccount, playDeniedSound);
buttonClickEventFactory(accountButton, playGrantedSound);
buttonClickEventFactory(profileAnalytics, playDeniedSound);
buttonClickEventFactory(profileSearch, playDeniedSound);
buttonClickEventFactory(contactInfo, playDeniedSound);
buttonClickEventFactory(socialLinks, playDeniedSound);
buttonClickEventFactory(skillView, playDeniedSound);
buttonClickEventFactory(portfolioView, playDeniedSound);
buttonClickEventFactory(followButton, playDeniedSound);
buttonClickEventFactory(messageButton, playDeniedSound);
