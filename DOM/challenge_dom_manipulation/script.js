// reference to <a> element
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// add <p> We hope you enjoyed the ride.</p> in side "section" tag
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// add <text> node and add to <p> that we create above
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
  );
const linkPara = document.querySelector("p"); // "here we will ..." (select first <p>)
linkPara.appendChild(text); // take this <p> back to be last element of section tag

sect.appendChild(linkPara);