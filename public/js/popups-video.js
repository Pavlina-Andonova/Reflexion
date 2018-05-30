// This is a link which takes the thumbnail of the video
const VIDEO_THUMBNAIL_URL = 'https://img.youtube.com/vi/';

// Takes the first generated picture of the video
const THUMBNAIL_NUMBER = '/0.jpg';

// Link which puts video in iframe from youtube
const VIDEO_SOURCE_URL = 'https://www.youtube.com/embed/';
const VIDEO_SETTINGS = '?autoplay=1';

var videoWrappers = document.querySelectorAll('#video-section-container .video-wrapper');
var videoIframe = document.getElementById('video');
var popupBox = document.getElementById('popup-box');

// Crawling the elemnts in videoWrapper and do the function()
[].forEach.call(videoWrappers, function (currentVideoWrapper) {
    var image = currentVideoWrapper.querySelector('img');
    var videoId = image.getAttribute('data-video-id');

    // Generate a link which takes us to the thumbNail of the video
    var imageUrl = VIDEO_THUMBNAIL_URL + videoId + THUMBNAIL_NUMBER;

    // We sets the src to the image and load it
    image.setAttribute('src', imageUrl);

    currentVideoWrapper.addEventListener('click', function () {
        // Generate URL to the video from youtube
        var videoUrl = VIDEO_SOURCE_URL + videoId + VIDEO_SETTINGS;
        videoIframe.setAttribute('src', videoUrl);

        popupBox.classList.add('open');
    })
});

var closeTriggers = document.querySelectorAll('#popup-box .close-trigger');

[].forEach.call(closeTriggers, function (trigger) {
    trigger.addEventListener('click', function () {
        videoIframe.setAttribute('src', '');
        popupBox.classList.remove('open');
    });
});