# ImageAnnotation
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



How to load Images : Being Done using UploadMultipleFiles and Server.js
// DONE :
1. Figure out how to save the images that are uploaded on a custom directory, rather than just in public.

// TODO :
2. Have a Image holder in the WorkingArea of the webpage for viewing all the photos, add arrow marks to go through
the directory of images.
