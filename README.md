# Pixel-Style-Image-Converter

Project deployment link: https://kaneovo.github.io/Pixel-Style-Image-Converter/

Choose: 2. A Data Manipulation Tool



In this project, I created a pixel art style image converter that accepts a user-uploaded image and uses the nearest neighbor interpolation method to compress and enlarge the image, achieving a pixel art style transformation. Users can customize the scale factor to try for the best results. The inspiration for this project came from a video on https://www.youtube.com/watch?v=CHxXL7A8ZpY, which discussed how to convert images into pixel art using Photoshop and introduced me to the nearest neighbor interpolation method.

The goal of this project is to create a tool that can convert images into pixel art style. During game development, I always encountered a shortage of pixel art assets, which made me very eager to have a tool that can convert ordinary images into pixel art style, significantly expanding my range of asset choices.

Regarding the results, I conducted some tests on the tool. It performs satisfactorily in converting vector images, such as some UI vector graphics. Additionally, it also delivers decent conversion effects for character images. However, it does not perform well with landscape images, especially those with uniform colors, such as a starry night sky. I believe this is due to the nearest neighbor interpolation method's inability to accurately reproduce the details of the stars in the sky. Overall, I am quite satisfied with my tool, as it can help me quickly create character pixel art portraits and convert vector UI graphics into pixel art style UI to match the artistic style of the game.

Here are some conversion examples:

![下载](https://github.com/KaneOvO/Pixel-Style-Image-Converter/assets/121581341/3127001b-7bac-4d4b-9f44-a67f973ee3c1)
![pixel_art (1)](https://github.com/KaneOvO/Pixel-Style-Image-Converter/assets/121581341/18fe92c3-d10f-4fa8-b2bb-34b5ce1b1869)


![下载 (3)](https://github.com/KaneOvO/Pixel-Style-Image-Converter/assets/121581341/7ba3aa0a-4303-444c-bcb5-55fe9327bb62)
![pixel_art (3)](https://github.com/KaneOvO/Pixel-Style-Image-Converter/assets/121581341/0a68b9ba-c50b-412b-a23c-28cdc0bf2609)
