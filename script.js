// JavaScript for managing comments
function loadComments() {
    const commentsList = document.getElementById('comments-list');
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    
    savedComments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = <p>${comment}</p>;
      commentsList.appendChild(commentElement);
    });
  }
  
  function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
  
    if (commentText !== '') {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = <p>${commentText}</p>;
  
      const commentsList = document.getElementById('comments-list');
      commentsList.appendChild(commentElement);
  
      const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
      savedComments.push(commentText);
      localStorage.setItem('comments', JSON.stringify(savedComments));
  
      commentInput.value = '';
    }
  }
  
  window.onload = loadComments;