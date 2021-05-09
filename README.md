Trip Tracker Report

In the project directory, you can run below commands to run product locally:
### `npm install`

### `npm start`
### This command will open the application in browser on post 3000.


Runs the app in the development mode.
Open [http://localhost:3000] to view it in the browser.

# About Application
1. This product is developed to keep track of driving trip of people.
2. The product will need a .txt input file.
3. Each line in the input file will start with a command. There are two possible commands.(Driver, Trip)

## Command 1: "Driver", which will register a new Driver in the app.
Example:
`Driver SimpleOne`

## Command 2: "Trip", which will record a trip attributed to a driver. 
`Trip SimpleOne 07:15 07:45 17.3` (Command, Driver Name, Start Time, End Time, Distance Travelled)

## Applications Requirements or Assumptions stated.
1. Discard any trips that average a speed of less than 5 mph or greater than 100 mph
2. If no trip is attributed to driver then it will display 0 in all parameters
3. Generate a report containing each driver with total miles driven and average
speed. 
4. Sort the output by most miles driven to least. 
5. Round miles to the nearest integer
6. Round miles per hour to the nearest integer.

## Example Input
``````````````
Driver Alpha
Driver Beta
Driver Charlie
Driver Delta
Driver Emma
Trip Alpha 07:30 07:45 120.5
Trip Beta 08:30 09:45 50.7
Trip Beta 07:30 07:45 20.8
Trip Alpha 08:58 09:45 160.5
Trip Beta 07:30 07:45 20.3
Trip Delta 20:30 21:45 55.5
Trip Beta 07:30 07:45 20.6
Trip Charlie 08:30 09:45 50.8
```````````````````````````

## Project Complexity
1. Atomic Design pattern
2. React
3. React Hooks, functional components (As we don't have  a large application to manage the state, we can use hooks instead of Redux)
4. ES6 (let/const, Object & Array Destructuring, Spread Operator, Map for Data Structure, Template Literals, Arrow Function, Class)


## use of Map() against Objects/Array
1. Map is a data structure
2. we can manage data in more efficient ways 
3. Many predefined methods are available for Map, which gives us a flexibility to work with different combination.
4. Map() methods - Map.keys(), Map.values(); Map.entries(); Map.size(); Map.has(); Map.delete()

## use of other ES6 features
1. Add synthetic sugar in writing javascript code. (JSX)
2. Length of code and so bundle size will be less
3. Take advantage of block level scope using const & let

## Code structure
1. Production build will be generated in "build" folder using `npm run build`
2. "SampleInput.txt" is a sample txt file 
3. "src"  is the core folder of product
## index.js - will render our application by injecting App.js 
## app.js - will work a main container of all child elements/components
## components - 2 react components are created in this  folder
### 1. FileInput.js - this component will render text input field in UI, process uploaded file, get the result by calling services and pass it to App component.
### 2. TripReport.s - App component will pass result object to this table and this react component will render report as a responsive table in UI
### 3. Helper.js - This component does all the business logic calculations and creates the final report data and passes to the App.js which inturn passes to the TripReport for displaying it on screen.
