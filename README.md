# Dragz JS

[Go to hosted site(dragz-js.netlify.app)](https://dragz-js.netlify.app/)

## Overview

Dragz JS is a web application that simulates the behavior of a spherical ball under different physical conditions such as gravity, coefficient of restitution, and drag coefficient. The project aims to provide an interactive visualization of how these parameters affect the motion of the ball.

## Features

- **Interactive Interface**: The interface allows users to adjust parameters such as acceleration due to gravity, coefficient of restitution, and coefficient of drag using input fields.
  
- **Real-time Simulation**: The simulation updates in real-time as the user modifies the parameters, providing immediate feedback on how changes affect the behavior of the ball.

- **Smooth Animation**: The animation of the ball's motion is achieved using `requestAnimationFrame`, ensuring smooth rendering and optimal performance.

## How it Works

1. **Setting Parameters**: Users can adjust the parameters of the simulation by modifying the values in the input fields. These parameters include:
   - **Accleration due to Gravity (`g`)**: Determines the strength of gravity affecting the ball's motion.
   - **Coefficient of Restitution (`e`)**: Represents the bounciness of the ball. A higher value results in a more elastic collision with the ground.
   - **Coefficient of Drag (`d`)**: Influences the air resistance experienced by the ball.

2. **Starting the Simulation**: Users can click the "Play" button to start the simulation with the current parameter settings.

3. **Pausing and Restarting**: The "Pause" button allows users to pause the simulation at any time, while the "Restart" button resets the simulation to its initial state.

4. **Simulation Logic**: The `fall` function is responsible for updating the position and velocity of the ball in each frame of the animation. It calculates the new position based on the current velocity and acceleration due to gravity, taking into account the coefficient of restitution and drag.

## Technologies Used

- **HTML**: Provides the structure of the web page.
- **CSS**: Styles the elements to create an appealing visual interface.
- **JavaScript**: Implements the simulation logic and interaction functionality.
- **`requestAnimationFrame`**: Used for smooth animation rendering.
- **Tailwind CSS**: Utilized for styling components and layout.

## Demo

You can see the project in action [here](https://dragz-js.netlify.app/).

## Installation

To run the project locally, simply clone the repository and open `index.html` in your web browser:

```bash
git clone https://github.com/UtsavJ23/dragz-js.git
cd dragz-js
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
