# 💫 scroll stars animation with GSAP

This creation feels like an animation of a falling star. <br/>
I made the background in two layers.
When you scroll, it feels like the stars are falling off because of the scrolling.

### 🧸 Built with
<img src="https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white">

### ✔️ Things to remember
```sh
gsap.to(window, 1.5, {
    scrollTo: {
      y: 0,
      autoKill: true,
    },
    ease: Power3.easeInOut,
  })
  ```
* In CSS, always use the ```body {scroll-behavior: smooth;}``` to animate smoothly when going to the top, <br />
but I realized that I could use GSAP to set a wider range of values.
