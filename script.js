const containerDiv = document.querySelector('.container');
const mainEL = document.createElement('main');
mainEL.classList.add('main-content');;

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];
function renderPosts() {
    let stringHTML = '';
    for (let i = 0; i < posts.length; i++) {
        stringHTML += `
                   <article class="posts bottomLine">
                <header>
                    <div class="profile-info">
                        <h1>${posts[i].name}</h1>
                        <h2>${posts[i].location}</h2>
                        <img src="${posts[i].avatar}" alt="Profile picture of ${posts[i].name}.">
                    </div>
                </header>
                <img class="posted-img" src="${posts[i].post}" alt="The self-portrait of ${posts[i].name}.">
                <footer class="post-interactions">
                    <div class="btn-container ">
                        <button aria-label="Like" class="btn first"><img src="Images/icon-heart.png"
                                alt="Like."></button>
                        <button aria-label="Comment" class="btn middle"><img src="Images/icon-comment.png"
                                alt="Comment."></button>
                        <button aria-label="Share" class="btn last"><img src="Images/icon-dm.png" alt="Share."></button>
                    </div>
                    <p class="likes">${posts[i].likes} likes</p>
                    <div class="Comments container">
                        <p class="post-caption"><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
                    </div>
                </footer>
            </article>
        `;
    }
    mainEL.innerHTML = stringHTML;
    containerDiv.appendChild(mainEL);
};
renderPosts()