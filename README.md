# 1
The following exercises will give you more practice with creating classes and managing state.

Create two function components: Input and OuputThe Input component should show a label (that says "type here") and a text input element
The Output component should show an empty div
Import these into your App component
Change the App component to a class
In App's constructor, add a state property with a single key: textValue
Give textValue a value of "this is the text value in state"
Pass the textValue state property as a prop to the Input and also to the Output
In your Input component, use the prop as the value of the text input element
In your Output component, display the prop in the div
Give App a helper function "_updateText" that receives a string as an argument and calls setState() to update the textValue in App's state
Pass "_updateText" as a second prop to the Input component
Use the prop as the onChange of the text input element
Make sure that as you type into the Input also appears in the Output
Bonus feature #1: create a ClearInput component that contains a button. When the button is clicked, the text in the Input and the Output should be empty 
Bonus feature #2: create an UpperCaseOputput component. Pass the textValue state property to it. It should display the same text, but in uppercase.
Bonus feature #3: create a CaesarCipherOutput component. 

# 2
Create a calculator application that has:

two number inputs
four buttons for each arithmetic of the following arithmetic operations: addition, subtraction, division, multiplication
an output that shows the result of doing the arithmetic operation on the two numbers
a reset button that clears the two inputs

# 3 
Recreate as much of the Apple notes application as you can with React.
If you are unfamiliar with the notes application (or are not on a Mac), the features include:

A sidebar with a list of the notes
When you click a note, the full contents of the notes can be viewed an edited
A search bar that filters the list of notes as you type

# 4
Create a chuck norris joke viewer with:

A button that retrieves a new random dev joke using Axios
An output area that displays the joke content

# 5 
Create a game of thrones character browser with:

A sidebar showing character's names
When you click one of the character's names, the full character information displays on the page
At minimum, make sure to create the following components:

CharacterList
CharacterListItem
CharacterDetailView
Bonus features:

Filter out any characters with no name
Provide previous/next buttons to go to the next page of characters