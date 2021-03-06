# Workoutbook
Workoutbook, inspired by Facebook, is a single-page application social media network that connects users and allows them to share health and fitness content with each other. Users can customize their profile pages, post on walls, comment on posts, like posts and comments, and make friends!

![Screen Shot 2020-10-23 at 10 27 40 AM](https://user-images.githubusercontent.com/60491357/97035629-78356e80-151b-11eb-9b8a-9dcbf0b1418e.png)

## Demo
See what type of activities Workoutbook users have been sharing here: [Workoutbook Live!](https://workoutbook-nate.herokuapp.com/#/)
## Technologies Used
+ Ruby on Rails
+ JavaScript
+ PostgreSQL
+ JBuilder
+ JQuery
+ HTML/CSS
+ React
+ Redux
+ Amazon Web Services (AWS S3)
+ Heroku
## Feature Highlights
### Posts
Users can share posts and photos on their wall and other users' walls. When sharing photos, users can see a preview of their photo prior to posting and cancel if desired. Users can only edit posts if they are the author. Users can delete posts if they are the author or if the posts are on their profile page. This allows more customization for what others can see when visiting their profile pages.

![post](https://user-images.githubusercontent.com/60491357/98750245-4cffab80-2372-11eb-8c41-a478ada482da.gif)
### Comments
Users can comment on posts. Similarly to posts, users can only edit inline comments if they are the author. Users can delete comments if they are the author or if the comments are on their profile page.

![comment2](https://user-images.githubusercontent.com/60491357/98743837-8c73cb00-2365-11eb-9834-3c3ecb3dd3d1.gif)
### Likes
Users can like and unlike posts and comments.

![likes](https://user-images.githubusercontent.com/60491357/98742851-fb502480-2363-11eb-8753-59969f1936a8.gif)
### Search
Users can search other users to add as friends.

![search1](https://user-images.githubusercontent.com/60491357/99607425-a4c89300-29c0-11eb-8fbb-dc48ea2676c7.gif)
### Friending
Users can accept / decline friend requests and request / unfriend other users.

![friend](https://user-images.githubusercontent.com/60491357/98750786-aae0c300-2373-11eb-8a82-c660a24b32ee.gif)
## Code Snippets
### Friend Request
This snippet handles the main functionality of requesting a new friendship, unfriending current friends, and displaying a pending friendship status if a friend request already exists. `handleRequest` and `handleRemove` invokes methods, which are promises, `this.props.requestFriends` and `this.props.deleteFriend`, respectively. Thereafter, methods were chained onto the promises to trigger an update to the Redux state.
```js
    handleRequest(e) {
        e.preventDefault();
        this.props.requestFriend({ requestee_id: this.props.postProfile.id }).then(this.props.fetchAllUsers());
    };
    
    handleRemove(e) {
        e.preventDefault();
        let friendship;
        this.props.currentUserFriends.forEach( friend => {
            if (friend.friend_id === this.props.postProfile.id) {
                friendship = friend;
            };
        });
        this.props.deleteFriend(friendship).then(this.props.fetchUser(this.props.postProfile.id));
    }

    displayFriendButton() {
        let alreadyFriends = false;
        let pendingFriendship = false;

        this.props.currentUserFriends.forEach( friend => {
            if (friend.friend_id === this.props.postProfile.id) {
                alreadyFriends = true;
            };
        });

        this.props.friendRequests.forEach( request => {
            if ((request.requester_id === this.props.postProfile.id && request.requestee_id === this.props.currentUser.id) ||
                (request.requestee_id === this.props.postProfile.id && request.requester_id === this.props.currentUser.id)) {
                    pendingFriendship = true;
            };
        });
        
        if (this.props.postProfile.id === this.props.currentUser.id) {
            return null;
        } else if (alreadyFriends === true) {
            return <button className='delete-friend-btn' onClick={this.handleRemove}><i className="fas fa-user-minus"></i>Unfriend</button>
        } else if (pendingFriendship === true) {
            return <button className='pending-friendship-btn'><i className="fas fa-user-edit"></i>Pending</button>
        } else {
            return <button className='request-friendship-btn' onClick={this.handleRequest}><i className="fas fa-user-plus"></i>Add Friend</button>
        };
    };
```
## Future Direction
+ Nested comments
+ Photo carousel
