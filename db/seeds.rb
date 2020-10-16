# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

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
    fname: 'theo',
    lname: 'oh',
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