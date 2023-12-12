let userComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    profilepPicture: "N/A",
    txt: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    profilepPicture: "N/A",
    txt: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    profilepPicture: "N/A",
    txt: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

document.getElementById("form-all").onsubmit = displayComments;

function displayComments(event) {
  event.preventDefault();

  let nameText = document.getElementById("form-name").value;

  let dateText = new Date().toISOString().split("T")[0];
  dateText = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }); //was suggested this by the internet

  let profilepPictureSrc = "n/a"; //userComments[i].profilepPicture;

  let commentText = document.getElementById("form-comment").value;

  let newComment = {
    name: nameText,
    date: dateText,
    profilepPicture: profilepPictureSrc,
    txt: commentText,
  };

  userComments.unshift(newComment);

  loadComments();

  document.getElementById("form-all").reset();
}

function loadComments() {
  const targetHTML = document.getElementById("commentSection");
  targetHTML.innerHTML = "";
  for (let i = 0; i < userComments.length; i++) {
    let createdArticle = document.createElement("article"); //makes the main article box
    createdArticle.classList.add("comment-section__comments__article"); // adds CSS class to the box
    //in logic we add the image to this, THEN after add the next line:

    let articleHTML = document.createElement("div"); //makes the text div
    articleHTML.classList.add("comment-section__comments__article__text");
    //in logic once the text div is made we then put in the header__date div in:

    let headerdateDiv = document.createElement("div"); //makes the username and date div
    headerdateDiv.classList.add(
      "comment-section__comments__article__headerdate"
    );
    //then only after do we add the comment text

    //Making variables and HTML for adding to the above Divs

    let nameText = userComments[i].name; //finds the string
    let nameHTML = document.createElement("p"); //makes the P tag to put the string into
    nameHTML.innerText = nameText; //puts the string into the P tag inside the "box" so it can be used later.

    let dateText = userComments[i].date;
    let dateHTML = document.createElement("p");
    dateHTML.classList.add(
      "comment-section__comments__article__headerdate__date"
    );
    dateHTML.innerText = dateText;

    let commentText = userComments[i].txt;
    let commentHTML = document.createElement("p");
    commentHTML.innerText = commentText;

    let profilepPictureSrc = userComments[i].profilepPicture;
    let profilepPictureHTML = document.createElement("img"); //if profilepPicture is blank/set to N/A it will simply use the backup
    profilepPictureHTML.setAttribute("src", profilepPictureSrc);
    profilepPictureHTML.classList.add(
      "comment-section__comments__article__image"
    );

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
loadComments();
