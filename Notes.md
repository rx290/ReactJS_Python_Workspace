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

### Event Handling

    1. it can only uses CamelCase for names
    2. we pass a function as the event handler, rather than a string

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

    The ability to modulate the UI / Functional Element to reduce code redundancy is known as Componentization.

### Reuseable Components

    Each module is called a component and we can initiate and reuse these components wherever and however we like
 
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

    1. Mounting
       1. Constructor()
       2. getDerivedStateFromProps()
       3. render()
       4. componentDidMount()
    2. Updating
       1. getDerivedStateFromProps()
       3. ShouldComponentUpdate()
       4. render()
       5. getSnapshotBeforeUpdate()
       6. componentDidUpdate()
    3. Unmounting
       1. ComponentWillUnmount()

### Lifecycle of Functional Components?

### Lifecycle of Class based components?

### What are hooks? Most Common Hooks?

    Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

    Hooks allow us to "hook" into React features such as state and lifecycle methods.

    Most common types of hooks are as follows:
    1. useState
    2. useEffect
    3. useContext
    4. useRef
    5. useReducer
    6. useCallback
    7. useMemo

    You must import Hooks from react.

    Here we are using the useState Hook to keep track of the application state.

    State generally refers to application data or properties that need to be tracked.
    Hook Rules

    There are 3 rules for hooks:

    1. Hooks can only be called inside React function components.
    2. Hooks can only be called at the top level of a component.
    3. Hooks cannot be conditional

    Note: Hooks will not work in React class components.

### What is Redux?

### What is flux?

### What is Router?

    Create React App doesn't include page routing.
    React Router is the most popular solution.

    if we are using a multi-level page routing than the folder structure should be as follows:

    In the src folder, we'll create a folder named pages with several files:

    src\pages\:

        Layout.js
        Home.js
        Blogs.js
        Contact.js
        NoPage.js

    Each file will contain a very basic React component.


### What is ref?

    Ref is a short form for reference and it is generally used to point to some method or component.
    To create ref we use the hook CreateRef and to use ref we use the hook useref
    The useRef Hook allows you to persist values between renders.
    It can be used to store a mutable value that does not cause a re-render when updated.
    It can be used to access a DOM element directly.
    useRef() only returns one item. It returns an Object called current.
    When we initialize useRef we set the initial value: useRef(0)

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

#### Props

    Props are shot form for properties and these are custom inputs for the components or I can say attributes which can be passed to the components as a parameter.

    Every component has a builtin keyword called props and we have to pass it to the function or the class before access it.
    
    for example

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.f_name}</h1>

    <h2>Last Name: {props.l_name}</h2>

    <h2>Age: {props.age}</h2>
    </>
  );
}

<Person f_name={'Asad'} l_name{'Waseem'} age{'immortal'}/>

#### State

    State is the current condition of the component and is mutable 
    To understand the concept of state we need to understand following things:
    1. Hooks
        Any keyword which uses Use Keyword is a hook and has special reservation when it comes to play.
    2. Getter and Setters
        These are actual functions which set and get the value of the target object when the state changes
    3. Arrow or Anonymous Functions
        Anonymous or () => {}; functions are basically a name less function which gets call on the runtime

    To understand more about the state please view counter App

### UseEffect

    UseEffect is another popular hook which is invoked on the mounting of the component it is utilized to prevent side-effects of the class based components.

    UseEffect are usually used for fetching data from API for example:

    const api_url = 'www.someurl.com';
    const[solution, setSolution] = setState('');

    useEffect(()=>{
        // creating an asynchronous function
        const fetched_words = async () => {
            // creating a constant response to apply immutability for the fetched data
            const response = await fetch(api_url);
            // Extracting data
            const wordbank = await response.json();
            // Using random and floor function to fetch random data from word bank
            const randomword = wordbank[Math.floor(Math,random() * wordbank.length]);
            // Updating state
            setSolution(randomword);

        }
        fetched_words()
    },[]);

    <div>{solution}</div>

### Context API

### Routing and its Type

### Forms

### How to get out of refresh paradigm of useffect

### what is formig in react forms