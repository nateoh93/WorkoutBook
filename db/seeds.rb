# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(
    email: 'demo_user@squat.com',
    password: 'password',
    fname: 'Demo',
    lname: 'User',
    birthday: '2000/01/01',
    bio: "Running is the best form of exercise.",
    city: "San Francisco",
    school: "Marathon University",
)

user2 = User.create!(
    email: 'alex@squat.com',
    password: 'password',
    fname: 'Alex',
    lname: 'Yudit',
    birthday: '2000/02/01',
    bio: "I like to eat!",
    city: "San Francisco",
    school: "Snack University",
)

user3 = User.create!(
    email: 'ken@squat.com',
    password: 'password',
    fname: 'Ken',
    lname: 'Ashe',
    birthday: '2000/03/01',
    bio: "I like to do burpees!",
    city: "San Francisco",
    school: "Burpee University",
)

user4 = User.create!(
    email: 'nate@squat.com',
    password: 'password',
    fname: 'Nate',
    lname: 'Oh',
    birthday: '2000/04/01',
    bio: "I like to squat!",
    city: "San Francisco",
    school: "Squat University",
)

user5 = User.create!(
    email: 'theo@squat.com',
    password: 'password',
    fname: 'theo',
    lname: 'oh',
    birthday: '2000/05/01',
    bio: "I only workout my arms!",
    city: "San Francisco",
    school: "Curl University",
)