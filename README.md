# travelOp
TravelOp is an app that allows users to post their travel pictures, along with the description, location and recommendation regarding the place.

## Inspiration
I was hospitalized for nearly 3 months and looking at my travel pictures 
motivated me to get better. At the time, I wished I had an app where I could manage my 
photographs that was not social media. 

## Technologies used 
1. HTML/CSS
2. Javascript
3. Node.js
4. Express.js
5. PostgreSQL

## User Stories 
As an user, I can register and login into my account. 
As an user, I can post my travel pictures and description about the location.
As an user, I can create, read, update and delete
As an user, I can see live tweets from travel magazine CondeNast 
Traveler. 

## MVP 
1) Create database
2) Build CRUD functionality 
3) Render EJS views 
4) Use API (cloudinary/Twitter) 
5) Styling/ Responsive 

## Post MVP 
1) Auth 

## Build Strategy
I will be using the MVC architecture to build my app. I will be starting with 
my database, user authorization and authention, MVC and lastly EJS.

## Node Modules 
1. Passport, to build a User System with authentication 
2. Axios (CRUD), used to interact with the server
3. PG-Promise, to read SQL queries on Node
4. Logger, terminal logger
5. DotENV, allows .env support 
6. Express, used with Node.js 
7. Path, to set up public folder for static files
8. Express Session, used to enable sessions, allow users activities 
and to keep them logged in
9. Body-Parser, parse HTML and receive json object based on inputs on the server

## Time Management
I set up my auth, then proceeded to CRUD, Twitter API, and lastly styling. 


| Taks                          | Date  | Estimated time| Actual |
| -------------                 |:-----:| :------------:|:------:|
| Create GitHub Repo w/ read.me | 10/06 | 2hrs          | 2hr    |
| Node scaffolding              | 10/10 | 4hrs          | 3hr    |
| Express init + i dependencies | 10/10 | 2hrs          | 1hr    |
| Get Twitter API & read docs   | 10/10 | 1hrs          | 2hr    |
| Build DB                      | 10/10 | 2hrs          | 1hr    |
| Build CRUD functionality      | 10/10 | 5hrs          | 3hr    |
| Get insta API & test run it   | 10/11 | 5hrs          | 5hr    |
| Set up EJS views              | 10/11 | 2hrs          | 3hr    |
| Auth Docs                     | 10/13 | 12hrs         | 6hr    |
| Debbuging                     | 10/14 | 5hrs          | 4hr    |
| Styling                       | 10/15 | 12hrs         | 12hr   |
                                  TOTAL  60hrs           

