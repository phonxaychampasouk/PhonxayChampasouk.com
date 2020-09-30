# phonxay.com
checkout ===> www.phonxay.com for a live demo!  
The primary focus for me creating this application is to sharpen my skills with web development. I came up with the layout and design for my phonxay.com around my hobby of photography. 
I found myself talking thousands of photos from all of my travels and I felt I wanted to start displaying my content. I really enjoy Front-End web development so I challenged myself with creating a website that would be attractive among many types of user.
[Development]


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This application is a way for me to display my accomplishments from my past while have fun styling the page to my likings.
I plan on separating all the personal information I have filled in myself from the code so other users can reuse my template. 

![Searching](https://media.giphy.com/media/r1fAMipzAGiJFpcuKs/giphy.gif)  
> Notice the typewriter effect!  
```css
header .responsive-headline {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   overflow: hidden; /* Ensures the content is not revealed until the animation */
   border-right: .15em solid #d4d4dc; /* The typwriter cursor */
   white-space: nowrap; /* Keeps the content on a single line */
   margin: 0 auto; /* Gives that scrolling effect as the typing happens */
   letter-spacing: .15em; /* Adjust as needed */
   animation: 
     typing 3.5s steps(40, end),
     blink-caret .75s step-end infinite;
 }
 
 /* The typing effect */
 @keyframes typing {
   from { width: 0 }
   to { width: 100% }
 }
 
 /* The typewriter cursor effect */
 @keyframes blink-caret {
   from, to { border-color: transparent }
   50% { border-color: #d4d4dc; }
 }
 ```
 
 ![Searching](https://media.giphy.com/media/w0e8R9jcPrRm1wU8xE/giphy.gif)  
> Next I made all of my main elements have a onhover effect to give my site a nice look and feel.

 ![Searching](https://media.giphy.com/media/4NVFpOIVcadkwjpb9v/giphy.gif)  
 > Here is my project section! The idea behind this design was to make each project card look as simple as possible. I originally had a project description that 
 appeared on each card but elected to move the description into the main body of the projects section.
   > * to create a project I mapped through a data object
 ```javascript 
     projectsData.forEach((data, index) => projectCard.push(
      <ProjectCard index={index} cardPage={cardPage} onArrowClick={this.onArrowClick} data={data} />,
    ));
 ```
> then I place it right into a parent element

``` javascript
            <div className="project-card">
              {projectCard}
            </div>
```

![Searching](https://media.giphy.com/media/VvdnNi4Pm05CUh6hIy/giphy.gif)  
> this is what the project card looks like when you expand the card.


![Searching](https://media.giphy.com/media/r94Q1b5uxnKM8SDsRn/giphy.gif)  

> Here is my photo gallery, this gallery is interesting because had to merge 3 libraries together to make my information button float around the screen.
I implemented this feature so users (both desktop and mobile) can view my photos and the photo description at the same time.

    

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install 
npm run build
```

