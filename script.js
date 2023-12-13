document.getElementById('commentIcon').addEventListener('click', function() {
    document.getElementById('commentLink').click();
  });
  
  document.getElementById('commentLink').addEventListener('click', function(event) {
    event.preventDefault();
    var commentBox = document.getElementById('commentBox');
    if (commentBox.style.display === 'none' || commentBox.style.display === '') {
      commentBox.style.display = 'block';
      commentBox.scrollIntoView({ behavior: 'smooth' });
    } else {
      commentBox.style.display = 'none';
    }
  });
  