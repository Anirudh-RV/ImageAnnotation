# ImageAnnotation

// git :
to check number of lines :

all files :
git ls-files | xargs wc -l

only the grep (go) files :
git ls-files | grep '\.go' | xargs wc -l

limits to 5 :
git ls-files | grep '\.go' | xargs wc -l | head -n 5

save output in file :
git ls-files | xargs wc -l >> LOC.txt

//API CALLS :
POST : create new record in the database
GET  : Read from database
PUT : Update/Replace row in database
PATCH : Update/Modify row in database
DELETE : delete row in database

Extended :
GET : The GET method requests a representation of the specified resource. Requests using GETshould only retrieve data.
HEAD : The HEAD method asks for a response identical to that of a GET request, but without the response body.
POST : The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
PUT : The PUT method replaces all current representations of the target resource with the request payload.
DELETE : The DELETE method deletes the specified resource.
CONNECT : The CONNECT method establishes a tunnel to the server identified by the target resource.
OPTIONS : The OPTIONS method is used to describe the communication options for the target resource.
TRACE : The TRACE method performs a message loop-back test along the path to the target resource.
PATCH : The PATCH method is used to apply partial modifications to a resource.


// DONE :
1. Figure out how to save the images that are uploaded on a custom directory, rather than just in public.
2. Have a Image holder in the WorkingArea of the webpage for viewing all the photos, add arrow marks to go through
the directory of images for that particular user.

// TODO :
3. Have Separate user login.
4. Manage different user data.
5. conflicting names of the images are taken care of, while saving.

Interactive tool for Image annotation

React redirection map :

          Index.js -> Routes.js //(Has different routes)
                        |
                        |
                        |
                        v
        ==================================
        |               |                |
        Home          EditPage         UploadFile
                        ^
                        |
                        |
NavigationBar -----------
(Separate Component)

########--------------------------------------------------------------------------------------------------
to accomplish requirement: FIRST (COMPLETE)
1. Figure out how to save the images that are uploaded on a custom directory, rather than just in public.
How to load Images : Being Done using UploadMultipleFiles and Server.js


END OF FIRST REQUIREMENT
########--------------------------------------------------------------------------------------------------
to accomplish requirement: SECOND (COMPLETE)
2. Have a Image holder in the WorkingArea of the webpage for viewing all the photos, add arrow marks to go through
the directory of images for that particular user.

How to upload images and retrieve dynamically :

Uploading : upload has 2 different parts, uploading the actual images into backend(NodeJS) and uploading the names of the images that were successfully uploaded using an Api to a backend database

1. Upload the images using UploadMultipleFiles and server.js using json and a post requests
2. Use an Api call to add names of the images being uploaded into a database.

Retrieval :
1. Get names of the images in the database by using an Api call.
2. Load those images using the location of the images.
3. Dynamic loading will happen when each image needs it's own Api call to get the name
4. Start from the first image, call Api for only the first image name, then as the user proceeds, call for other images.
// will help in maintaining speed and will not load too many images to the local working environment.

Api to use : Go / Java (prefer Go)
Database to use : SQL


// Next : Learn how to make Api using Golang.
API: Application Programming Interface using Golang

POST REQUEST
Webpage (Send data) -----> API ------> Backend (SQL) (Store Data)

GET REQUEST

webpage (Request data)  --------> API ----------> Backend (SQL)
webpage (Get data)      <---------API <---------- (Fetch data)

Work for API:

Completed :
1. Go server setup which handles requests and returns a json object.
2. Axios request from frontend
3. Displays data returned from API on the frontend
4. Test out sending basic data to the POST method from frontend
  a.Manipulate data in GO backend and send back response
  b.Show the result on the frontend
  c.String data is being sent from reactjs frontend using an axios post request, the data
    is then read by the go backend and converted into UPPERCASE and then sent back as a
    json object. This json object is being displayed in the frontend

//TODO :
1. Connect Go to an SQL server and handle the requests with the API.This includes:
  a. Inserting Image names into the Database
  b. Retrieving Image names from the database (One name / all the names)
  c. Retrieval must be done according to the user and only the images a particular user has uploaded.


Work for Database:

NOTE : currently using mongodb as the database for storing names, simpler solution than setting up a mysql Database
in MacOS.

Completed :
1. Integrate Go with SQL/mongodb (Test functions for inserting and searching completed)
2. Make SQL/mongodb database with 3 columns,
  a. Sl.no (Serial number)
  b. Name of the user
  c. Name of the Image
3. Method for Search function completed.
  a. API call from frontend with POST request with the name of the user
  b. Connection to mongodb and searching all the inputs of the user (Using filters)
  c. Returning the queried result in json format back to frontend
  d. Display of result in frontend
4. Inserting into database from frontend (Test)
5. Delete function (deleteuser) for deleting any user from the database
6. 1. Try the API functionality from the actual webpage
  a. Inserting image names and the username
7. Username is being sent to nodejs backend and the images are being saved as :
  <user-name>"____"<image-name>
8. Redirect to EditPage after Image upload with the user information
9. How to retrieve the names of the user from the actual webpage
10. How to have image holders for the user's images
11. Arrow marks to navigate through the images

//TODO :


NOTE :
// to be done in next project : Login with sessionID, cookies and authenticating using JWT
Figure out how to save the images with the username in it, in the folder.
 a. How to maintain login information throughout the environment.
 b. Use the username to change information specific to the user accordingly
 The JWT (Json Web Token) is widely used in authenticating Web applications developed using advanced Javascript frameworks : Angularjs or Reactjs(with supporting libraries)

END OF SECOND REQUIREMENT
########--------------------------------------------------------------------------------------------------
to accomplish requirement: THIRD
3. Have Separate user login.
