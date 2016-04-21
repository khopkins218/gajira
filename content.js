// JS scripting for the plugin's functionality
function setTarget(coll) {
  $.each(coll, function() {
    $(this).attr('target', '_blank');
  })
}
setTimeout(function() {
  var swimlaneLinks = $('.ghx-swimlane').find('a');
  $.each(swimlaneLinks, function() {
    var location = $(this).attr('href');
    var newTabLink = $(document.createElement('a')).text('(Open in tab)').attr('href', location).attr('style', 'margin-left: 1rem; font-size: 0.8rem;');
    $($(this).parent()).append(newTabLink);
    $(newTabLink).on('click', function() {
      window.open(location, '_blank');
    });
  });

  // Description Links
  setTarget($('#description-val').find('a'));
  // Comment Links
  setTarget($('.action-body').find('a'));

  // Clear background on swimlane columns
  $('.ghx-column').attr('style', 'background-color:rgba(0, 0, 0, 0)');
  chrome.storage.sync.get({
    background: chrome.extension.getURL('images/basket-full-of-kittens.jpg')
  }, function(items) {
    $('.ghx-columns').attr('style', 'background:url(' + items.background + ');');
  });
}, 1500);
