//* Create elements 
const firstSection = document.querySelector('section');
const articleElement = document.createElement('article');
const imgElement = document.createElement('img');
const hThreeElement = document.createElement('h3');
const pFirst = document.createElement('p');
const pSecond = document.createElement('p');
const asideElement = document.createElement('aside');
const strongElement = document.createElement('strong');
const spanElement = document.createElement('span');
const fourMinText = document.createTextNode("4 Minutes");
const aTagElement = document.createElement('a');
const classPost = document.querySelector('.posts');
const arrayOfElements = [imgElement, hThreeElement, pFirst, asideElement];
const articleTags = document.querySelectorAll(".posts article");
const headerList = document.getElementsByTagName("li");
const headerNodes = document.querySelectorAll('h3')


//* Modify elements
imgElement.src="./images/paul-gilmore-unsplash.jpg";
imgElement.alt="Image of a mountain in front of a lake.";
aTagElement.href = "#";
hThreeElement.innerText = "Stop Planning";
pFirst.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
strongElement.textContent = "Read Time: ";
aTagElement.innerText = "Read more...";
headerList[0].remove("a")


//* appending child elements
firstSection.classList.add("featured");
arrayOfElements.forEach(x => {
    articleElement.appendChild(x);
})
spanElement.appendChild(strongElement);
spanElement.appendChild(fourMinText);
pSecond.appendChild(spanElement);
pSecond.appendChild(aTagElement);
asideElement.appendChild(pSecond);
articleElement.appendChild(asideElement);
classPost.appendChild(articleElement);
classPost.insertBefore(articleTags[1], articleTags[0])

const featuredSection = document.querySelectorAll(".featured span");
featuredSection[0].remove("span");

const planningArticle = classPost.getElementsByTagName("article")[2];
classPost.removeChild(planningArticle);

headerNodes.forEach(x => {
    x.remove(x)
})