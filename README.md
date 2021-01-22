# JSX Rules

## return single element

### div / section / article or Fragment

// use camelCase for html attribute
// className instead of class
// close every element
// formatting
// Whenever you are using jsx you have to import react from react

```js
const hallo = console.log('hallo World');
```

## Questions

//1. How is a component defined?
//2. What is the difference between a component and a function?

## Definitions:

Nesting: putting a component into another component
Root component: the component that contains other component
Refactor: the process of clarifying and simplifying the design of existing code, without changing its behavior

```js
const AddItem = () => {
  return (
    <form action='/action_page.php'>
      <label for='item'>Item:</label>
      <input type='text' id='item' name='item' value='add item'></input>
      <br></br>
      <input type='submit' value='Submit'></input>
    </form>
  );
};
```
