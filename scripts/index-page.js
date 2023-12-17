import bandSiteAPI from "./band-site-api.js";

const bandsiteAPI = new bandSiteAPI();

const getData = async () => {
  console.log(bandSiteAPI);
  let userComments = await bandsiteAPI.getComments();

  loadComments(userComments);
};
document.getElementById("form-all").addEventListener("submit", displayComments);

async function displayComments(event) {
  event.preventDefault();

  let nameText = document.getElementById("form-name").value;

  let commentText = document.getElementById("form-comment").value;

  let newComment = {
    name: nameText,
    comment: commentText,
  };
  await bandsiteAPI.postComments(newComment); //This is the current error

  //userComments.unshift(newComment);
  getData();
  //loadComments();

  document.getElementById("form-all").reset();
}

function loadComments(userComments) {
  const targetHTML = document.getElementById("commentSection");
  targetHTML.innerHTML = "";
  for (let i = 0; i < userComments.length; i++) {
    let createdArticle = document.createElement("article"); //makes the main article box
    createdArticle.classList.add("comment"); // adds CSS class to the box
    //in logic we add the image to this, THEN after add the next line:

    let articleHTML = document.createElement("div"); //makes the text div
    articleHTML.classList.add("comment__main");
    //in logic once the text div is made we then put in the header__date div in:

    let headerdateDiv = document.createElement("div"); //makes the username and date div
    headerdateDiv.classList.add("comment__header");
    //then only after do we add the comment text

    //Making variables and HTML for adding to the above Divs

    let nameText = userComments[i].name; //finds the string
    let nameHTML = document.createElement("p"); //makes the P tag to put the string into
    nameHTML.innerText = nameText; //puts the string into the P tag inside the "box" so it can be used later.

    //let dateText = userComments[i].timestamp;
    //dateText = dateText.toLocaleString("en-US");
    let dateText = new Date(userComments[i].timestamp);
    let dateHTML = document.createElement("p");
    dateHTML.classList.add("comment__header--date");
    dateHTML.innerText = dateText.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    let commentText = userComments[i].comment; // needs modification for output of API
    let commentHTML = document.createElement("p");
    commentHTML.innerText = commentText;

    let profilepPictureSrc = userComments[i].profilepPicture;
    let profilepPictureHTML = document.createElement("img"); //if profilepPicture is blank it will simply use the backup
    if (profilepPictureSrc == "undefined") {
      profilepPictureHTML.setAttribute("src", profilepPictureSrc); //if PFP is missing this will not activate. putting a placeholder instead
    }
    profilepPictureHTML.classList.add("comment__image");
    // musti be modified ... somehow?

    //Adding the Divs and P tags together and then formating
    headerdateDiv.appendChild(nameHTML); //adds text to Div 4 in two parts for CSS reasons
    headerdateDiv.appendChild(dateHTML);

    articleHTML.appendChild(headerdateDiv); //adds Div 4
    articleHTML.appendChild(commentHTML); //adds P 5 below Div 4

    createdArticle.appendChild(profilepPictureHTML);
    createdArticle.appendChild(articleHTML);
    targetHTML.appendChild(createdArticle);
  }
}

getData();
