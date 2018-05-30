 $(document).ready(function() {
     const VIDEOS_COUNT = 6;
     var currentShowedVideo = VIDEOS_COUNT;

     var $allVideos = $('#video-collection').children('.video-wrapper');
     $allVideos.slice(0, VIDEOS_COUNT).show();

     var $loadMoreBtn = $('#load-more-button');

     $loadMoreBtn.on('click', function() {
         $('.video-wrapper:hidden').slice(0, VIDEOS_COUNT).slideDown();
         currentShowedVideo += VIDEOS_COUNT;

         if (currentShowedVideo >= $allVideos.length) {
             $(this).fadeOut('slow');
         }

         $('html,body').animate({
             scrollTop: $(this).offset().top
         }, 1500);
     });
 });