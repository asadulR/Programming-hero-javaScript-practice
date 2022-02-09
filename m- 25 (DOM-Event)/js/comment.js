document.getElementById('comment-submit-button').addEventListener("click", function () {
    //  add button event handeler 
    const newCommentBox = document.getElementById('new-comment');
    //  get user comment
    const userComment = newCommentBox .value;
    //  creating element 
    const  newComment = document.createElement('p');
    newComment.innerText = userComment;

    //  appand the comment

    const commentContainer = document.getElementById('comment-container');

    commentContainer.appendChild(newComment);


    //  clean the comment box

    newCommentBox.value = '';

})