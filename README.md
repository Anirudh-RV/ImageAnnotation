# ImageAnnotation

// DONE :
1. Figure out how to save the images that are uploaded on a custom directory, rather than just in public.

// TODO :
2. Have a Image holder in the WorkingArea of the webpage for viewing all the photos, add arrow marks to go through
the directory of images.
3. Have Separate user login.
4. Manage different user data.
5. Make personal directories for each user.

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

########
to accomplish requirement:
1. Figure out how to save the images that are uploaded on a custom directory, rather than just in public.
How to load Images : Being Done using UploadMultipleFiles and Server.js


########
to accomplish requirement:
2. Have a Image holder in the WorkingArea of the webpage for viewing all the photos, add arrow marks to go through
the directory of images.
How to upload images and retrieve dynamically :

Uploading : upload has 2 different parts, uploading the actual images into backend(NodeJS) and uploading the names of the images that were successfully uploaded using an Api to a backend database

1. Upload the images using UploadMultipleFiles and server.js using json and a post requests
2. Use an Api call to add names of the images being uploaded into a database.

Retreival :
1. Get names of the images in the database by using an Api call.
2. Load those images using the location of the images.
3. Dynamic loading will happen when each image needs it's own Api call to get the name
4. Start from the first image, call Api for only the first image name, then as the user proceeds, call for other images.
// will help in maintaining speed and will not load too many images to the local working environment.

Api to use : Go / Java (prefer Go)
Database to use : SQL


// Next : Learn how to make Api using Golang.
