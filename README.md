# social-network-api
Module 18 NoSQL Challenge: Social Network API

## Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. 
This challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Technologies used include Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Instructions
<b>User Story:</b><br />
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
<b>Acceptance Criteria:</b><br />
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Mock-Up
The following animations show examples of the application's API routes being tested in Insomnia. <br/>
The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/197038854-21f64e7e-89d3-479f-989d-0bbb581e69a2.png)

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/197038900-f0d58a69-5092-489c-a880-58fa5ef2e8d3.png)

The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/197038958-d4f29bf2-9dbf-40c9-994f-26e1a01806d4.png)

The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:
![image](https://user-images.githubusercontent.com/4752879/197038992-eed7e2e1-a24d-4f9f-81f2-1e3d42c3765f.png)

## Repo
```
https://github.com/dtierney21/social-network-api
```
## Demo Video
```
https://drive.google.com/file/d/1msNySjWN_IZs9lPswzK4KT5mnrUyBtKZ/view
```
