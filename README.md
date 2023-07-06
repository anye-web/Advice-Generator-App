# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenShot.jpg)

### Links

- Solution URL: [Github](https://github.com/anye-web/Advice-Generator-App)
- Live Site: [Website](https://advice-generator-sites.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

This Project is basic buit challenging because it was my first solo React project, I learn to use, useState and useEffect, and also getting data from and api using async await.

```js
useEffect(() => {
  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice/${randNumber}`);
    const data = await res.json();
    setAdvice(data.slip);
  }
  getAdvice();
}, [randNumber]);
```

## Author

- Frontend Mentor - [@anye-web](https://www.frontendmentor.io/profile/anye-web)
- Twitter - [@frujunior2](https://www.twitter.com/frujunior2)
