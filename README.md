# IOD Mini Project #1 Doggy Dossier

### Doggy Dossier is a Dog information and images site.

## Mini-Project #1
The first mini-project is designed to cover HTML/CSS/JS learned in the first 4 modules. The exercise on slide 92 of Module 4 is a good basic guide for the kind of thing that is required. Ideally the app will include multiple pages, some navigation, some interaction with an external data source, and include techniques such as animation, graphs, icons, fonts, templating, bootstrap, etc. 

Here are some questions for the students to cover during their presentations:

1.	What was your requirements gathering and design process? Was it useful/successful?
    - My original design, as you know, was to build an employee profile manager.
    - This involved my talking with a friend who works at a civil engineering company. They need an application to manage their employees. I didn't realise how extensive this project would be.
    - I then resorted to rebuilding the mini project.
    - I chose to build a Doggy Dossier website that provide dig   information and images. https://www.figma.com/file/si1BdB6lkRbEdSnutVuHjY/mini-project-%231-doggy-dossier?type=design&node-id=16-3&mode=design&t=c2elsNAjCqaqdqxB-0 
    - I made up a fake customer that had the following requirements:
      1. The home page needs to have a warm welcome message as well as a carousel of dog images playing. The carousel should have controls to scroll back and forth.
      2. A Facts page should have a selection box to select a breed. After which the page is reloaded with facts and an image carousel.
      3. Images in the gallery page will be displayed in a grid with the name of the dog underneath. Clicking an image will bring up a modal window with quick stats.
2.	Give a high level overview of your application and its features
    - A Dog facts and images website. Searchable breeds and interactive gallery.
3.	Where does its data come from (external/internal APIs)?
    - The data for the dog facts and images is fetched from an external API located here: ```https://api.thedogapi.com/v1/```
4.	How is this data processed and displayed?
    - The data is fetched as JSON array data and passed to an ```updateHero(dogs);``` function. That function then uses the array to populate an HTML template and append it to the DOM.
5.	How can the user interact with your application?
    - The user can search by breed for facts or look through images in the gallery.
6.	What JS techniques have you used (eg. objects, arrays, DOM functions, loops, functions)?
7.	What external tools/libraries have you used (eg. bootstrap/axios/charts)? How? Why?
8.	What kinds of HTML elements have you used (eg. tables, forms, divs, lists, headings, menus, videos, images)?
9.	What kinds of CSS features have you used (eg. animations, backgrounds, fonts, colours, flexbox, grid)?
10.	How might you extend the features of your application in future?
