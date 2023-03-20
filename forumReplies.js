const exampleAuthor = "TotallyRealUser";

function addReply() {
  const divider = document.createElement("hr");
  document.getElementById("replies").appendChild(divider);

  //add author
  //in a functional product, exampleAuthor would be replaced by whoever is logged in
  addTextDiv(exampleAuthor, "author");

  //add current time
  /*let now = Date.now();
    addTextDiv(text,"comment");*/

  //add comment
  let text = document.getElementById("newReplyContent").value;
  addTextDiv(text, "comment");
  document.getElementById("newReplyContent").value = "";
}

function addTextDiv(text, type = "") {
  //create element
  const newElement = document.createElement("p");
  //create text node
  const textContent = document.createTextNode(text);
  //append text node
  newElement.appendChild(textContent);
  //style if needed, note that not every type might need a class added
  if (type == "author") {
    newElement.classList.add("author");
  } else if (type == "comment") {
    newElement.classList.add("comment");
  }
  //add element to document
  document.getElementById("replies").appendChild(newElement);
}
