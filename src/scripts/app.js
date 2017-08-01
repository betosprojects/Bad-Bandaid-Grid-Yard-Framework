// Nav Menu Toggle:
// Documen Content Loader (document ready):

document.addEventListener('DOMContentLoaded', function () {

    var eventClick = document.querySelector('.hamburger-icon');
    var targetSelector = document.querySelector('.nav-section');
    eventClick.addEventListener('click', function () {
        if (targetSelector.classList.contains('toggle')) {
            targetSelector.classList.remove('toggle');
        }
        else {
            targetSelector.classList.add('toggle');
        }
    }, false);

});
// END of document ready
