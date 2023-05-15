function create3rdPost(callback) {
  setTimeout(() => {
      console.log('Post Three');
      if (callback) {
          callback();
      }
  }, 1000);
}

function create4thPost() {
  setTimeout(() => {
      console.log('Post Four');
  }, 2000);
}

function create5thPost() {
  setTimeout(() => {
      console.log('Post Five');
  }, 3000);
}

create5thPost(create4thPost(create3rdPost()))