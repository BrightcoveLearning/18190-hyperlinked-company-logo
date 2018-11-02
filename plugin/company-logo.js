videojs.registerPlugin('companyLogo', function() {
  var myPlayer = this;
      controlBar,
	    newElement = document.createElement('div'),
      newLink = document.createElement('a'),
	    newImage = document.createElement('img');

  // Assign id and class to div for logo icon
  newElement.id = 'companyLogo';
  newElement.className = 'vjs-control';

  // Uncomment next line to see the newly created company logo div element
  //console.log("button: ",newElement);

  // Assign property to div element
  newImage.setAttribute('src','https://solutions.brightcove.com/bcls/assets/images/bc-logo-white.png');
  // Assign properties to a element
  newLink.setAttribute('href','https://www.brightcove.com');
  // Uncomment next line to open link in a new browser tab
  //newLink.setAttribute('target', '_blank');
  // Add img element to parent a element
  newLink.appendChild(newImage);
  // Add a element to parent div element
  newElement.appendChild(newLink);

  // Get control bar
  // Remember that getElementsByClassName() returns an array
  controlBar = document.getElementsByClassName('vjs-control-bar')[0];

  // Insert the logo icon to the end of the control bar elements
  controlBar.appendChild(newElement);
});
