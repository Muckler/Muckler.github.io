(function() {
//Below could be refactored with a function that takes id, background color
//padding, paragraph text and then returns the element
var bigBox = document.createElement('div');
var HighCodeDiv = document.createElement('div');
var HighCode = document.createElement('div');
var Hightitle = document.createElement('span');
var anAnchor = document.createElement('a');
var anAnchor2 = document.createElement('a');
var CurseOf = document.createElement('div');
var CurseHead = document.createElement('span');
var CurseP = document.createElement('p');
document.body.appendChild(bigBox);
var Content = document.createElement('div');
var ContentTitle = document.createElement('h1');
var ContentP = document.createElement('p');
var ContentPSub = document.createElement('div');
var ContentPSubE = document.createElement('span');
var ContentPSubF = document.createElement('span');

var Content2 = document.createElement('div');
var ContentTitle2 = document.createElement('h1');
var ContentP2 = document.createElement('p');
var ContentPSub2 = document.createElement('div');
var ContentPSubE2 = document.createElement('span');
var ContentPSubF2 = document.createElement('span');
//document.body.appendChild(HighCodeDiv);
bigBox.appendChild(HighCodeDiv);
HighCodeDiv.appendChild(HighCode);
HighCode.appendChild(Hightitle);
HighCode.appendChild(anAnchor);
HighCode.appendChild(anAnchor2);
bigBox.appendChild(CurseOf);
CurseOf.appendChild(CurseHead);
CurseOf.appendChild(CurseP);
bigBox.appendChild(Content);
Content.appendChild(ContentTitle);
Content.appendChild(ContentP);
Content.appendChild(ContentPSub);
ContentPSub.appendChild(ContentPSubE);
ContentPSub.appendChild(ContentPSubF);
bigBox.appendChild(Content2);
Content2.appendChild(ContentTitle2);
Content2.appendChild(ContentP2);
Content2.appendChild(ContentPSub2);
ContentPSub2.appendChild(ContentPSubE2);
ContentPSub2.appendChild(ContentPSubF2);

document.body.appendChild(bigBox);
//document.body.appendChild(HighCodeDiv);
//document.HighCodeDiv.appendChild(HighCode);
Hightitle.innerHTML = "High On Coding"; 
Hightitle.style.color = "white";
Hightitle.style.fontSize = 'xx-large';
HighCodeDiv.style.backgroundColor = "#a5d8ff";
anAnchor.setAttribute('href', 'https://www.google.com/');
anAnchor.textContent ='Home';
anAnchor.style.fontSize = 'x-large';
anAnchor.style.color = 'white';
anAnchor.style.marginLeft = "250px";

anAnchor2.setAttribute('href', 'https://www.ducati.com/us/en/home');
anAnchor2.textContent ='Categories';
anAnchor2.style.fontSize = 'x-large';
anAnchor2.style.color = 'white';
anAnchor2.style.marginLeft = "250px";

CurseOf.style.backgroundColor = "#adb3b5";
CurseHead.style.fontSize = 'xx-large';
CurseHead.innerHTML = 'Curse of the Current Reviews';
CurseP.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
ContentTitle.style.color = '#6195e8';
ContentTitle.innerHTML = 'Hello Watchkit';
ContentP.innerHTML ='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
ContentPSub.style.color = 'white';
ContentPSub.style.backgroundColor = '#ef6807';
ContentPSubE.innerHTML = '15 Comments';
ContentPSubE.style.marginLeft = '50px';
ContentPSubF.innerHTML = '28 Likes';
ContentPSubF.style.marginLeft ='750px';

ContentTitle2.style.color = '#6195e8';
ContentTitle2.innerHTML = 'Introduction To Swift';
ContentP2.innerHTML ='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
ContentPSub2.style.color = 'white';
ContentPSub2.style.backgroundColor = '#ef6807';
ContentPSubE2.innerHTML = '15 Comments';
ContentPSubE2.style.marginLeft = '50px';
ContentPSubF2.innerHTML = '28 Likes';
ContentPSubF2.style.marginLeft ='750px';






})();