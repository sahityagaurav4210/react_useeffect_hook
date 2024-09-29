# React use-effect hook

This sample react project built using vite demonstrate use-effect hook, its working and real world usage.

## Introduction

React **use-effect** is a hook provided by react by which we can create **side-effects** in our code. In other words, we can trigger some actions based on some events.

## Syntax

```javascript
useEffect(callback_function, dependencies);
```

**where:-**

- callback_function is a function which will execute whenever the event will occur.
- dependencies is an array and call_back executes whenever its element's value changes.

## Variations of hook

**Case I: [No dependency array is given]** In this case, when no dependency array is given then the use-effect hook and its cleanup-function will trigger each and every time the component mounts and un-mounts.

**Case II: [An empty dependency array is given]** In this case when an empty dependency array is given then the hook and its cleanup function will trigger only when the component mounts and un-mounts for the first time only.

**Case III: [When an element is present inside array]** In this case, when an element is present inside the array then hook and its cleanup function will run when the component mounts/un-mounts for the first time and will run again only when elements inside the dependancy array changes their value(s).

## Some real-world examples

- Clock

```javascript
const [currentTime, setCurrentTime] = useState(Date.now());
useEffect(() => {
  const currentTimeHandler = setInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  return () => clearInterval(currentTimeHandler);
}, []);
```

- Api Call

```javascript
const [todos, setTodos] = useState < Array < ITodos >> [];

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => setTodos(json));

  console.log("fetching todos...");

  return () => {
    console.log("deleting todos...");
    setTodos([]);
  };
}, []);
```

## Kepoints

- When we don't provide dependancy array then use-effect will run on every re-render which will make the hook uncontrollable. So, to prevent this always provide an empty array as a dependancy.
- Use use-effect hook only when you've to perform an action based on some events.
