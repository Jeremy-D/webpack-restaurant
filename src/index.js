//console.log('I livvvveeee')
import 'bootstrap';
import './scss/index.scss';

const homeBtn = document.getElementById('nav-home-tab');
const profileBtn = document.getElementById('nav-profile-tab');
const contactBtn = document.getElementById('nav-contact-tab');

let currentBtn = homeBtn;

//console.dir(homeBtn)

const contentContainer = document.getElementById('nav-home')
const homeContent = `
				<div class="col-md bg-info">
		  		<h1 class="display-2">node modules!</h1>
		  	</div>

		  	<div class="col-md bg-light">
		  		<h1 class="display-2">text</h1>
		  	</div>`;

const profileContent = 
	  	`<div class="col-md bg-light">
		  		<h1 class="display-2">image</h1>
		  	</div>

		  	<div class="col-md bg-danger">
		  		<h1 class="display-2">Webpack!</h1>
		  	</div>`;

const contactContent = 
	  	`<div class="col-md bg-warning">
		  		<h1 class="display-2">src/dist!</h1>
		  	</div>

		  	<div class="col-md bg-light">
		  		<h1 class="display-2">text</h1>
		  	</div>`;

homeBtn.addEventListener('click', function(){replaceContent(contentContainer, homeContent, homeBtn)});
profileBtn.addEventListener('click', function(){replaceContent(contentContainer, profileContent, profileBtn)});
contactBtn.addEventListener('click', function(){replaceContent(contentContainer, contactContent, contactBtn)})

function replaceContent(elementAppend, content, tab){
	currentBtn.classList.remove('active');
	currentBtn = tab;
	console.dir(tab)
	console.log(tab.classList)
	tab.classList.add('active')
	elementAppend.innerHTML = '';
	elementAppend.insertAdjacentHTML('afterBegin', content)
}

replaceContent(contentContainer, homeContent, homeBtn)

