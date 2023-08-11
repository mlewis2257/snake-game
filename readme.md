Title: Snake Game

Screenshot
<a href="https://ibb.co/JKBZHSb"><img src="https://i.ibb.co/G0xmRr1/Screenshot-2023-08-11-at-12-01-49-AM.png" alt="Screenshot-2023-08-11-at-12-01-49-AM" border="0"></a>b">

Technologies Used
-HTML, CSS3 and JavaScipt

Getting Started
Link to the actual game
https://mlewis2257.github.io/snake-game/

1. Snake game
   Is game that starts you off as single celled snake. Your goal is to use the w("up")a("left")s("down")d("right") to navigate around the board to extend your snakes and eat as much food as you can!

   If you run into to walls or run into any part of yourself you will lose the game and will have to start over.

   // Render board
   // Start game, when the game starts and after every time you eat food update the css properties
   // setTimeInterval or potential while loop to run the game constantly or end when out of bounds or runs into tail

2. Snake Class
   Uses a snake class that is rendered to the board once the game start. This snake class has instance that are called to give the snake function and movement around the board every time it's rendered. This class can be used multiple times to render a new snake.

3. Food Class
   Similar to the snake class except the instances are used a little bit different. After food is eaten it disappears from shows up in a random location on the board.

4. Controls
   w("up")a("left")s("down")d("right")
   Reset button must be clicked to initialize the board again.

5. Snake starts of at predetermined length(Use two dimensonal based array of objects for snakes features)
   // Keep track of Head, Tail and Body
   // Have to know which direction the tail is in
   //Possibly keep track of all element coordinates and directions
   // these would be updated constantly
   // Snakes also starts at a predetermined areas at start
   // tracker to keep track of where the snake is on the grid
   // Snake grows as you eat or pass through food
   // If snake hits the wall or itself game is over
   // Snake commands can only move in two directions
   // Need to keep track of the head and tail of the snake

6. Food will appear randomly in the grid area
   // Make sure to not generate food on snake coordinates
   // Once snakehead passes through length grows

Icebox updates:

- Adding complete eating of the food and adding to snake length.
- Adjust difficulty
- Light and Dark mode button
- Change the color of your snake
