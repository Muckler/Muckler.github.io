var myNode = document.querySelector('.row');

myNode.addEventListener("click", function(e) {
    var imgMikeSrc = e.target.src;
    var splitMike = imgMikeSrc.split('/');
    var theTag = splitMike.pop();
    //console.log(theTag);
    var aNewDiv = document.createElement('div');
    var anAnchor = document.createElement('img');
    anAnchor.setAttribute('src', theTag);
    aNewDiv.appendChild(anAnchor);
    document.body.appendChild(aNewDiv);
    
    //console.log(e.target.src);
    //console.log(e);

    //console.log(e.target);
    //e.preventDefault();
    //myNode.setAttribute('src', e.getAttribute('href'));
    }
);