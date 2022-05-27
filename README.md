# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshots/)

(./screenshots).


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JSON API



## My Process

### What I learned

```html
  <div class="advice">
          <p>
            <q id="getadvice">
              It is easy to sit up and take notice,what's difficult is getting up and taking action.
            </q>
          </p>
    </div>

```

```css
  .main>.inner>.advice {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
```

```js
  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
    return data;
}
```


### Continued development

API
Mid-level JavaScript.
A bit advanced CSS.


### Useful resources

- MDN - (https://developer.mozilla.org/en-US/docs/Web/API)


## Author

- Frontend Mentor - [@Wizzy-05](https://www.frontendmentor.io/profile/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/ahuzi_wisdom)


## Acknowledgments

To my roomates... Tobi and Sixtus, a very big thank you.

To my teachers/Mentors... Harry and Desmond, Thanks for all your help and support.