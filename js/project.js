// Zelda Projects JS
var index = 0;
var okToNext = true;
var nextProject = $('.project-next');
var projectTitle = $('.project-title p');
var projectContent = $('.project-content p');
var projectContentArray = [
	{
		title: 'React YouTube Player',
		content: 'Using React, I created a more centralized way to view YouTube videos, as it displays the video you are currently watching, and five other suggestions.'
	},
	{
		title: 'Vue Monster Game',
		content: 'Using Vue, I created a turned based game where you must give it your all to defeat the monster'
	},
	{
		title: 'Weather App',
		content: 'I incorporated a weather API to be able to display the weather in either Pacoima (my hometown) or Northridge.'
	}
]
var last = projectContentArray.length;

nextProject.on('click', function() {
	index += 1;
	if (index === last) {
		index = 0;
	}
	projectTitle.animate({'opacity': 0}, 1000, function () {
		projectTitle.html(projectContentArray[index].title);
	}).animate({'opacity': 1}, 750);
	
	projectContent.animate({'opacity': 0}, 1000, function () {
		projectContent.html(projectContentArray[index].content);
	}).animate({'opacity': 1}, 750);
});