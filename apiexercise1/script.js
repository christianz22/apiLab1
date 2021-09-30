// Use JavaScript to request data from the https://www.reddit.com/r/aww/.json API.
// Display the results on the page.
// At a minimum, include a title, an image and a working link for each post. (Easiest is to use the thumbnail for the image, but there are other images in the JSON response.)
// Make it look good with some CSS.

const reddit = fetch('https://www.reddit.com/r/aww/.json');
console.log(reddit);

reddit // this is the promise
    .then(response => {
        // first then
        // then means when the API finishes downloading
        // console.log(response);

        return response.json(); // converts into javascript object with the data requested
    })
    .then(data => {
        // second then, after we get the javascript object
        // console.log(data);
        console.log(data);
        const children = data.data.children;
        // do something
        for (let child of children) {
            // console.log(child);
            //console.log(child.data.title);


            //<div> <h2> Reddit Post </h2></div>
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');
            const h4 = document.createElement('h4');
            div.setAttribute('class', 'reddit');

            // setting the text of the h2 to the results from the api
            h2.innerText = child.data.title;
            img.src = child.data.thumbnail;
            h4.innerText = child.data.url;
            div.append(h2);
            div.append(img);
            div.append(h4);




            document.querySelector('main').append(div); // add div to the end of the main


        }
    });
const targetDiv = document.getElementById("aww");
const btn = document.getElementById("toggle");
btn.onclick = function() {
    if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
};