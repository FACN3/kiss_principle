# :confetti_ball::confetti_ball:Kiss_Principle:confetti_ball::confetti_ball:

Access our site here: XXXX

## This week: Setup a database which is connected to via a node.js server. Using your own data, make a dynamic web app for your front-end.

Our Idea was to create a database of recommended places to buy coffee nearby in
Nazareth. The functionality of our app/database would include:

* User ability to setup a app ID
* User ability to add a new place, with name and address
* User ability to add a rating/review of new/existing places
* User ability to easily search, views ratings and reviews of locations
* Show the location with Google Maps

#### WHO :busts_in_silhouette:

* <a href= "https://github.com/ghassanmas/ghassanmas.github.io">Ghassanmas</a>

* <a href=
"https://github.com/NickP123">NickP123</a>

* <a href= "https://github.com/haithhawk/">Haithhawk</a>

* <a href= "https://github.com/prodionov/prodionov.github.io">Prodionov</a>

#### WHY :key:

This was a project to extend our team experience with creating and accessing
databases using PSQL, schematic mapping and building on skills learnt in
previous weeks of building servers and making requests. There is also continued
focus this week on database testing, environment variables and gaining
experience in storing the information in Heroku.

#### WHAT :loudspeaker:

A application that will provide a list of coffee shops in the local Nazareth
area. Coffee shops can have a user submitted rating and review, and users can
also tag particular coffee shops for what type of coffee was the best - eg
Americano, Espresso etc. Locations can be shown from address on Google maps.

#### HOW :wrench:

We Whiteboarded our ideas and then outlined the project on a shematic diagram.
With this in mind we then outlined our system-architecture. See below:

Front-end

* index.html for user interaction.
* Forms to collect data (Users, places, rating...)

* Public folder - containing:
  * style.css,
  * dom.js,
  * logic.js

Back End

* src folder - containing:

  * server.js,
  * router.js,
  * handler.js (to API),
  * data.sql
  * config.env
  * package.JSON

The chain of events were to take place as follows

1. Click event in Google Maps
2. Event listener for 'on-click' event
3. XHR/server static server Request
4. Request sent to GPS to address API
5. Data manipulated and sent to NYT API
6. Response with required data
7. Dom Manipulation / filtering of data in API Handler
8. Rendering of information back to user

#### Instructions for using the website:

Click the weblink in the title of the repo. Then...

1. Create a user account
2. Search for locations, ratings and reviews
3. Add a new location and rating. Option to also add a review

---

##### SYSTEM ARCHITECTURE / PLAN

<img width="1247" alt="screen shot 2017-12-05 at 14 31 35" src="https://user-images.githubusercontent.com/25667270/33652614-c74bb934-da72-11e7-807f-0ac3f2188ce9.png">

<img width="680" alt="screen shot 2017-12-06 at 10 47 51" src="https://user-images.githubusercontent.com/25667270/33652727-1e4245e6-da73-11e7-89fe-68f333529a75.png">

###### STEP 1

* Whiteboard ideas and user experience
* Research suitable databases and prior workshops
* agree Idea and produce schema
* Readme outline
* Setup of project and folders
* outline front-end workload
* outline back-end workload
* create server
* create basic route paths
* create first database (users)

###### STEP 2

* Setup additional databases (places and reviews)
* Consider testing structure for linkage
* Outline form structure on html
* Work together on linking the databases + problem solve as necessary
* complete DOM handler for static information
* Security concerns - script injections
* Google Maps linkage

###### STEP 3

* Styling of forms and HTML
* Manipulation of rendered review information - is it user friendly?
* Mobile responsive?
* Accessability Checks
* Linter Checks
* Update README
* upload to cloud server
* Review code between team members to ensure understanding

---

##### PROJECT OBJECTIVES

1. Simple web app with a node server and a database

2. Your database comes with a schema, which should be documented in your readme
   (along with any other architectural decisions)

3. Database hosted on Heroku, or locally

4. Build script for your database

5. Security concerns appropriately considered (you must protect against script
   injections!)

6. Good test coverage both server- and client-side

7. Content dynamic, but DOM manipulation kept to a minimum

8. Mobile-first design

9. Clear user journey (even if you take one of our suggested ideas, document the
   user journey in your readme)
