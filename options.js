function saveOptions() {
  var background = document.getElementById('background').value;
  chrome.storage.sync.set({
    background: background
  }, function() {
    displayStatus('Options saved');
  });
}

function defaultOptions() {
  var background = document.getElementById('background').value;
  chrome.storage.sync.set({
    background: chrome.extension.getURL('images/basket-full-of-kittens.jpg')
  }, function() {
    restoreOptions();
    displayStatus('Reverted to defaults');
  });
}

function displayStatus(message) {
  var status = document.getElementById('status');
  status.textContent = message;
  setTimeout(function() {
    status.textContent = '';
  }, 1500);
}

function restoreOptions() {
  chrome.storage.sync.get({
    background: chrome.extension.getURL('images/basket-full-of-kittens.jpg')
  }, function(items) {
    document.getElementById('background').value = items.background;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('default').addEventListener('click', defaultOptions);
