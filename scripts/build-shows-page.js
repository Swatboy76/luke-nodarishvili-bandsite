let showsList = [
  {
    date: "Mon Sept 06 2021 ",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];
const targetHTML = document.getElementById("showsDiv");
function displayShows() {
  for (let i = 0; i < showsList.length; i++) {
    let createdArticle = document.createElement("article"); //makes the main article box, and adds the on-click system
    createdArticle.classList.add("shows__individual-show");
    createdArticle.onclick = function () {
      createdArticle.classList.toggle("shows__individual-show--clicked");
    }; //this was recomended to me via research

    //1St Div (Reuse as needed)
    let div1HTML = document.createElement("div"); //makes the 1st div
    div1HTML.classList.add("shows__individual-show__data");

    let div1name = document.createElement("p"); //makes the P tag to put the string into
    div1name.innerText = "DATE"; //Change
    div1name.classList.add("shows__individual-show__label");
    div1HTML.appendChild(div1name); // adds the "DATE" to the div

    let div1data = showsList[i].date; //Change
    let div1dataHTML = document.createElement("p");
    div1dataHTML.innerText = div1data; //puts the data (text) into the P tag
    div1dataHTML.classList.add("shows__individual-show__data__date");
    div1HTML.appendChild(div1dataHTML); // adds the data (text) to the div

    //2nd Div (Reuse as needed)
    let div2HTML = document.createElement("div"); //makes the 1st div
    div2HTML.classList.add("shows__individual-show__data");

    let div2name = document.createElement("p"); //makes the P tag to put the string into
    div2name.innerText = "VENUE"; //Change
    div2name.classList.add("shows__individual-show__label");
    div2HTML.appendChild(div2name); // adds the "DATE" to the div

    let div2data = showsList[i].venue; //Change
    let div2dataHTML = document.createElement("p");
    div2dataHTML.innerText = div2data; //puts the data (text) into the P tag
    div2dataHTML.classList.add("shows__individual-show__data__other");
    div2HTML.appendChild(div2dataHTML); // adds the data (text) to the div

    //3rd Div (Reuse as needed)
    let div3HTML = document.createElement("div"); //makes the 1st div
    div3HTML.classList.add("shows__individual-show__data");

    let div3name = document.createElement("p"); //makes the P tag to put the string into
    div3name.innerText = "LOCATION"; //Change
    div3name.classList.add("shows__individual-show__label");
    div3HTML.appendChild(div3name); // adds the "DATE" to the div

    let div3data = showsList[i].location; //Change
    let div3dataHTML = document.createElement("p");
    div3dataHTML.innerText = div3data; //puts the data (text) into the P tag
    div3dataHTML.classList.add("shows__individual-show__data__other");
    div3HTML.appendChild(div3dataHTML); // adds the data (text) to the div

    //button
    let buttonHTML = document.createElement("button");
    buttonHTML.classList.add("shows__individual-show__buy-tickets");
    buttonHTML.innerText = "BUY TICKETS";

    //Add all elements together
    createdArticle.appendChild(div1HTML);
    createdArticle.appendChild(div2HTML);
    createdArticle.appendChild(div3HTML);
    createdArticle.appendChild(buttonHTML);

    console.log(createdArticle);

    targetHTML.appendChild(createdArticle);
  }
}
displayShows();
function changeColor(element) {
  element.classList.toggle("shows__individual-show--clicked");
}
