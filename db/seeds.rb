# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Friendship.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all
FriendRequest.destroy_all

user1 = User.create!(
    email: 'demo_user@squat.com',
    password: 'password',
    fname: 'Demo',
    lname: 'User',
    birthday: '01/01/2000',
    bio: "Running is the best form of exercise.",
    city: "San Francisco",
    school: "Marathon University",
    work: 'Demo-litionist'
)

coverphoto1 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/cover_photo1.jpg')
user1.cover_photo.attach(io: coverphoto1, filename: 'demo_users_cover_photo.jpg')

profphoto1 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/demo_users_prof_photo1.jpg')
user1.profile_photo.attach(io: profphoto1, filename: 'demo_users_prof_photo1.jpg')

user2 = User.create!(
    email: 'alex@squat.com',
    password: 'password',
    fname: 'Alex',
    lname: 'Yudit',
    birthday: '02/01/2000',
    bio: "I like to eat!",
    city: "San Francisco",
    school: "Snack University",
    work: 'Professional Eater'
)

coverphoto2 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/cover_photo2.jpg')
user2.cover_photo.attach(io: coverphoto2, filename: 'user2_cover_photo.jpg')

profphoto2 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/user2_prof_pic.jpg')
user2.profile_photo.attach(io: profphoto2, filename: 'user2_prof_photo.jpg')

user3 = User.create!(
    email: 'ken@squat.com',
    password: 'password',
    fname: 'Ken',
    lname: 'Ashe',
    birthday: '03/01/2000',
    bio: "I like to do burpees!",
    city: "San Francisco",
    school: "Burpee University",
    work: 'Professional Faller'
)

coverphoto3 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/cover_photo3.jpg')
user3.cover_photo.attach(io: coverphoto3, filename: 'user3_cover_photo.jpg')

profphoto3 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/user3_prof_pic.jpg')
user3.profile_photo.attach(io: profphoto3, filename: 'user3_prof_photo.jpg')

user4 = User.create!(
    email: 'nate@squat.com',
    password: 'password',
    fname: 'Nate',
    lname: 'Oh',
    birthday: '04/01/2000',
    bio: "I like to squat!",
    city: "San Francisco",
    school: "Squat University",
    work: 'House Squatter'
)

coverphoto4 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/cover_photo4.jpg')
user4.cover_photo.attach(io: coverphoto4, filename: 'user4_cover_photo.jpg')

profphoto4 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/user4_prof_pic.jpg')
user4.profile_photo.attach(io: profphoto4, filename: 'user4_prof_photo.jpg')

user5 = User.create!(
    email: 'theo@squat.com',
    password: 'password',
    fname: 'Theo',
    lname: 'Oh',
    birthday: '05/01/2000',
    bio: "I only workout my arms!",
    city: "San Francisco",
    school: "Curl University",
    work: 'Dumbbell Carrier'
)

coverphoto5 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/cover_photo5.jpg')
user5.cover_photo.attach(io: coverphoto5, filename: 'user5_cover_photo.jpg')

profphoto5 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/user5_prof_pic.jpg')
user5.profile_photo.attach(io: profphoto5, filename: 'user5_prof_photo.jpg')

# user1.friend_ids = [user2.id, user3.id, user4.id, user5.id]

friendship1 = Friendship.create!(
    user_id: user1.id,
    friend_id: user2.id
)

friendship_inverse1 = Friendship.create!(
    user_id: user2.id,
    friend_id: user1.id
)

friendship2 = Friendship.create!(
    user_id: user1.id,
    friend_id: user3.id
)

friendship_inverse2 = Friendship.create!(
    user_id: user3.id,
    friend_id: user1.id
)

friendship3 = Friendship.create!(
    user_id: user2.id,
    friend_id: user5.id
)

friendship_inverse3 = Friendship.create!(
    user_id: user5.id,
    friend_id: user2.id
)

request1 = FriendRequest.create!(
    requester_id: user1.id,
    requestee_id: user4.id,
)

request2 = FriendRequest.create!(
    requester_id: user5.id,
    requestee_id: user1.id,
)

# friendship3 = Friendship.create!(
#     user_id: user1.id,
#     friend_id: user4.id
# )

# friendship_inverse3 = Friendship.create!(
#     user_id: user4.id,
#     friend_id: user1.id
# )

# friendship4 = Friendship.create!(
#     user_id: user1.id,
#     friend_id: user5.id
# )

# friendship_inverse4 = Friendship.create!(
#     user_id: user5.id,
#     friend_id: user1.id
# )


post1 = Post.create!(
    body: 'I just ran 50 miles in 5 hours! It hurt soooo good. Yoga time to unwind!',
    profile_user_id: user1.id,
    post_author_id: user1.id
)

# postphoto2 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/yoga.jpg')
# post1.post_photo.attach(io: postphoto2, filename: 'yoga.jpg')

post2 = Post.create!(
    body: "I heard you also ran an ultramarathon last week. You should hydrate.",
    profile_user_id: user1.id,
    post_author_id: user2.id
)

# postphoto1 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/water.jpg')
# post2.post_photo.attach(io: postphoto1, filename: 'water.jpg')

post3 = Post.create!(
    body: 'Ever thought about just eating burgers and sitting on a couch all day?',
    profile_user_id: user2.id,
    post_author_id: user3.id
)

post4 = Post.create!(
    body: 'Should I get a burger? I just worked out though...',
    profile_user_id: user1.id,
    post_author_id: user5.id
)

post5 = Post.create!(
    body: "I'm about to do the murph challenge. 1 mile run, 100 pullups, 200 pushups, 300 squats, 1 mile run. Wish me luck!",
    profile_user_id: user4.id,
    post_author_id: user4.id
)

post6 = Post.create!(
    body: "Hey Ken, show us your burpee form!",
    profile_user_id: user3.id,
    post_author_id: user4.id
)

post7 = Post.create!(
    body: "Can't wait to see you this weekend for a brutal workout followed by a yummy smoothie!",
    profile_user_id: user5.id,
    post_author_id: user4.id
)

post8 = Post.create!(
    body: "Amazing morning session!",
    profile_user_id: user2.id,
    post_author_id: user5.id
)

# postphoto3 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/morning_session.jpg')
# post8.post_photo.attach(io: postphoto3, filename: 'morning_workout.jpg')

post9 = Post.create!(
    body: "Fall leaves and chill weather but still getting after it!",
    profile_user_id: user3.id,
    post_author_id: user3.id
)

# postphoto4 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/fall_run.jpg')
# post9.post_photo.attach(io: postphoto4, filename: 'fall_run.jpg')

post10 = Post.create!(
    body: "Check out this view from my hike the other day!",
    profile_user_id: user4.id,
    post_author_id: user5.id
)

# postphoto5 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/hike1.jpg')
# post10.post_photo.attach(io: postphoto5, filename: 'hike1.jpg')

post11 = Post.create!(
    body: "You showed me an awesome pic so I wanted to try to one up you. How cool is this?",
    profile_user_id: user5.id,
    post_author_id: user4.id
)

# postphoto6 = open('https://workoutbook-seeds.s3-us-west-1.amazonaws.com/hike2.jpg')
# post11.post_photo.attach(io: postphoto6, filename: 'hik2.jpg')

comment1 = Comment.create!(
    body: 'Hey you deserve it. You have to enjoy life too!',
    post_id: post4.id,
    comment_author_id: user1.id
)

comment2 = Comment.create!(
    body: 'Alex is right. You know what they say...hydrate or die-drate.',
    post_id: post2.id,
    comment_author_id: user3.id 
)

comment3 = Comment.create!(
    body: "That's just nonsensical. You're crazy!",
    post_id: post1.id,
    comment_author_id: user2.id
)

comment4 = Comment.create!(
    body: 'Rise and grind. Early bird gets the worm!',
    post_id: post8.id,
    comment_author_id: user4.id
)

comment5 = Comment.create!(
    body: "Don't be silly. Abs are made in the kitchen.",
    post_id: post3.id,
    comment_author_id: user5.id 
)

comment6 = Comment.create!(
    body: "Wow that's beautiful",
    post_id: post9.id,
    comment_author_id: user1.id 
)

comment7 = Comment.create!(
    body: "Haha no thanks. That's embarrassing.",
    post_id: post6.id,
    comment_author_id: user3.id
)

comment8 = Comment.create!(
    body: "Okay not bad! I'm going hiking soon. I'll take a pic too.",
    post_id: post10.id,
    comment_author_id: user4.id
)

comment9 = Comment.create!(
    body: "Good luck. Don't hurt yourself.",
    post_id: post5.id,
    comment_author_id: user2.id
)

comment10 = Comment.create!(
    body: "Dang, what a view.",
    post_id: post11.id,
    comment_author_id: user5.id 
)

like1 = Like.create!(
    author_id: user1.id,
    likeable_type: 'Post',
    likeable_id: post1.id,
)

like2 = Like.create!(
    author_id: user2.id,
    likeable_type: 'Post',
    likeable_id: post1.id,
)

like3 = Like.create!(
    author_id: user3.id,
    likeable_type: 'Post',
    likeable_id: post1.id,
)

like2 = Like.create!(
    author_id: user1.id,
    likeable_type: 'Comment',
    likeable_id: comment1.id,
)