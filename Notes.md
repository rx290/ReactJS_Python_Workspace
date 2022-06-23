# Notes for ReactJS Crash Course

## Installation

1. Sudo apt install npm
2. sudo npm -g install create-react-app
3. create-react-app app_name
4. xd app_name
5. npm start

### Updating node via npm

1. sudo npm cache clean -f
2. sudo npm install -g n
3. sudo n stable

## Content

1. React Fundaments
2. Reuseable Components
3. Data Rending
4. Event Handling
5. App Debugging

### React Fundaments

    React is a wrapper / component based UI library.
    Which means it will have wrappers/components in a child parent relationship.
    Twitter for example:
    App
        Navbar
        Profile
        Trends
        Feed
            Tweets
            Likes
            Comments

    A wrapper or a component is basically a class with some state and render option.

    eg:
        class Tweet {

            state = {};
            render(){

            }
        }

    State:
        A state is basically a virtual representation of a DOM 

### Reuseable Components

### Data Rending

### Event Handling

### App Debugging

## Project Theme

    This project is very basic and simple it will focus on creating a shopping cart mechanism using ReactJS

## Question/Answers

### What is React?

    React is a java script library developed by facebook which is mainly used for building UIs based on components.

### React js vs React Native?

<table>
<thead>
<tr>
<th>Reasoning</th>
<th>React JS</th>
<th>React Native</th>
</tr>
</thead>
<tbody>
<tr>
<td>Release </td>
<td>2013</td>
<td>2015</td>
</tr>
<tr>
<td>Platform</td>
<td>Web</td>
<td>Mobile</td>
</tr>
<tr>
<td>HTML Support</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>CSS Styling Support</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Prerequisites</td>
<td>HTML, CSS and JS</td>
<td>React JS</td>
</tr>
</tbody>
</table>

### React js vs Angular?

<table>
<thead>
<tr>
<th>Reasoning</th>
<th>React JS</th>
<th>Angular</th>
</tr>
</thead>
<tbody>
<tr>
<td>Publisher / Authors</td>
<td>Facebook / Meta</td>
<td>Google</td>
</tr>
<tr>
<td>Architecture</td>
<td>View Layer of MVC</td>
<td>Complete MVC</td>
</tr>
<tr>
<td>DOM</td>
<td>Virtual DOM</td>
<td>Real DOM</td>
</tr>
<tr>
<td>Data-Bindings</td>
<td>Uni-Direction</td>
<td>Bi-Direction</td>
</tr>
<tr>
<td>Rendering</td>
<td>Server-Side</td>
<td>Client Side</td>
</tr>
<tr>
<td>Performance</td>
<td>Faster due to virtual DOM</td>
<td>Comparatively Slow</td>
</tr>
</tbody>
</table>

### Features of React JS?

    Features of React:
    1. JSX:  JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.
    2. Components: Components are the building blocks of any React application, and a single app usually consists of multiple components. It splits the user interface into independent, reusable parts that can be processed separately.
    3. Virtual DOM: React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, virtual DOM changes only that object in the real DOM, rather than updating all the objects.
    4. One-way data-binding: React’s one-way data binding keeps everything modular and fast. A unidirectional data flow means that when designing a React app, you often nest child components within parent components.
    5. High performance: React updates only those components that have changed, rather than updating all the components at once. This results in much faster web applications.

### Why React JS?

    Reasons to choose React JS over other libraries and Frameworks:
    1.  Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it provides less coding and provides more functionality, whereas, with JavaScript applications, code tends to get complex very quickly.  
    2.  Improved performance: React uses virtual DOM, which makes web applications perform faster. Virtual DOM compares its previous state and updates only those components in the real DOM, whose states have changed, rather than updating all the components — like conventional web applications.  
    3.  Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their own logic and controls, and they can be reused through the application, which, in turn, dramatically reduces the development time of an application  
    4.  Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, we often nest child components within parent components. And since the data flows in a single direction, it becomes easier to debug errors and know where the problem occurs in an application at the moment.
    5.  Dedicated tools for easy debugging: Facebook has released a chrome extension that we can use to debug React applications. This makes the process of debugging React to web applications faster and easier.

### How does React JS work?

    React works on the comparison of Real DOM and Virtual DOM.
    DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.
    React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects.

### What are components of React?

### Class Components VS Functional Components

<table>
<thead>
<tr>
<th>Reasoning</th>
<th>Class Components</th>
<th>Functional Components</th>
</tr>
</thead>
<tbody>
<tr>
<td>State</td>
<td>Can hold or manage state</td>
<td>Cannot hold or manage state</td>
</tr>
<tr>
<td>Simplicity</td>
<td>Complex as compared to the stateless component</td>
<td>Simple and easy to understand</td>
</tr>
<tr>
<td>Lifecycle methods</td>
<td>Can work with all lifecycle methods</td>
<td>Does not work with any lifecycle method</td>
</tr>
<tr>
<td>Reusability</td>
<td>Can be reused</td>
<td>Cannot be reused</td>
</tr>
</tbody>
</table>

### State VS Props


<table>
<thead>
<tr>
<th>Reasoning</th>
<th>State</th>
<th>Class</th>
</tr>
</thead>
<tbody>
<tr>
<td>Use</td>
<td>Holds information about the components</td>
<td>Allows to pass data from one component to other components as an argument</td>
</tr>
<tr>
<td>Mutability</td>
<td>Is mutable</td>
<td>Are immutable</td>
</tr>
<tr>
<td>Read-Only</td>
<td>Can be changed</td>
<td>Are read-only</td>
</tr>
<tr>
<td>Child components</td>
<td>Child components cannot access</td>
<td>No</td>
</tr>
<tr>
<td>Stateless components</td>
<td>Cannot have state</td>
<td>Can have props</td>
</tr>
</tbody>
</table>

### Lifecycle of React?

### What are hooks? Most Common Hooks?

### What is Redux?

### What is flux?

### What is Router?

### What is ref?

### React Routing VS Conventional Routing

<table>
<thead>
<tr>
<th>SN.</th>
<th>React Routing</th>
<th>Conventional routing</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.</td>
<td>Single HTML page</td>
<td>Each view is a new HTML file</td>
</tr>
<tr>
<td>2.</td>
<td>The user navigates multiple views in the same file</td>
<td>The user navigates multiple files for each view</td>
</tr>
<tr>
<td>3.</td>
<td>The page does not refresh since it is a single file</td>
<td>The page refreshes every time user navigates</td>
</tr>
<tr>
<td>4.</td>
<td>Improved performance</td>
<td>Slower performance</td>
</tr>
</tbody>
</table>


#### Using Variables

    Define a variable with var, const or let and pass it to curly braces
    use { var_name } to use a variable inside of function or classes.
    We can also do basic arithmetic in it.

#### Ternary operator

    {Some_condition ? statement_if_true : statement_if_false}

#### React Fragment

    <></> this is an empty wrapper called react fragment where we can write code and pass it to anything.