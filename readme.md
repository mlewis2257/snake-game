1. Create a grid that will be the board
   // Render board
   // Start game, when the game starts and after every time you eat food update the css properties
   // setTimeout or potential while loop to run the game constantly or end when out of bounds or runs into tail
2. Display score
   // Have score and high score initialize as 0
   //
   // Updates everytime the snake eats food
   // High score stays logged or stored

3. Controls
   // Keyboard event that determines left or right
   // If we use click function we have to keep track of the position of the snake
   // If the snake is moving up and down the Y axis
   determine where the click is on X axis
   // If the snake is moving up and down the X axis
   determine where the click is on Y axis
   // will evt.target for the click event
   // Depending on if traveling on Y/X axis click event will determine:
   if greater than or less than position of the head move left or right
   if
   // If it doesn't then nothing will run.

4. Snake starts of at predetermined length(Use two dimensonal array/array of objects for snakes features)
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

5. Food will appear randomly in the grid area
   // Make sure to not generate food on snake coordinates
   // Once snakehead passes through length grows
