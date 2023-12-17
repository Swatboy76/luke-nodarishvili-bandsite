import bandSiteAPI from "./band-site-api.js";

const bandsiteAPI = new bandSiteAPI();

const getData = async () => {
  console.log(bandSiteAPI);
  let showsList = await bandsiteAPI.getShows();

  displayShows(showsList);
};

const targetHTML = document.getElementById("showsDiv");

function displayShows(showsList) {
  for (let i = 0; i < showsList.length; i++) {
    let createdArticle = document.createElement("article"); //makes the main article box, and adds the on-click system
    createdArticle.classList.add("individual-show");

    // Highlighting section
    document.addEventListener("click", function (event) {
      if (!createdArticle.contains(event.target)) {
        createdArticle.classList.remove("individual-show--clicked");
      }
    });
    createdArticle.onclick = function () {
      //convert to addEventLissener=============================================================
      createdArticle.classList.toggle("individual-show--clicked");
    }; //this was recomended to me via research

    //1St Div (Reuse as needed) Date
    let dateHTML = document.createElement("div"); //makes the 1st div
    dateHTML.classList.add("individual-show__data");

    let dateName = document.createElement("p"); //makes the P tag to put the string into
    dateName.innerText = "DATE";
    dateName.classList.add("individual-show__label");
    dateHTML.appendChild(dateName); // adds the "DATE" to the div

    let dateData = new Date(showsList[i].date);
    let dateDataHTML = document.createElement("p");
    dateDataHTML.innerText = dateData.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    }); //puts the data (text) into the P tag
    dateDataHTML.classList.add("individual-show__data__date");
    dateHTML.appendChild(dateDataHTML); // adds the data (text) to the div

    //2nd Div (Reuse as needed) Venue
    let venueHTML = document.createElement("div"); //makes the 1st div
    venueHTML.classList.add("individual-show__data");

    let venueName = document.createElement("p"); //makes the P tag to put the string into
    venueName.innerText = "VENUE";
    venueName.classList.add("individual-show__label");
    venueHTML.appendChild(venueName); // adds the "VENUE" to the div

    let venueData = showsList[i].place;
    let venueDataHTML = document.createElement("p");
    venueDataHTML.innerText = venueData; //puts the data (text) into the P tag
    venueDataHTML.classList.add("individual-show__data__other");
    venueHTML.appendChild(venueDataHTML); // adds the data (text) to the div

    //3rd Div (Reuse as needed) Loc
    let LocationHTML = document.createElement("div"); //makes the 1st div
    LocationHTML.classList.add("individual-show__data");

    let LocationName = document.createElement("p"); //makes the P tag to put the string into
    LocationName.innerText = "LOCATION";
    LocationName.classList.add("individual-show__label");
    LocationHTML.appendChild(LocationName); // adds the "LOCATION" to the div

    let LocationData = showsList[i].location;
    let LocationDataHTML = document.createElement("p");
    LocationDataHTML.innerText = LocationData; //puts the data (text) into the P tag
    LocationDataHTML.classList.add("individual-show__data__other");
    LocationHTML.appendChild(LocationDataHTML); // adds the data (text) to the div

    //button maker
    let buttonHTML = document.createElement("button");
    buttonHTML.classList.add("individual-show__buy-tickets");
    buttonHTML.innerText = "BUY TICKETS";

    // Add all elements together (ORDER IS IMPORTANT, FUTURE PROGRAMER)
    createdArticle.appendChild(dateHTML);
    createdArticle.appendChild(venueHTML);
    createdArticle.appendChild(LocationHTML);
    createdArticle.appendChild(buttonHTML);

    // Final product is added
    targetHTML.appendChild(createdArticle);
  }
}
getData();
