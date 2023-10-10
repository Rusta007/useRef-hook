# useRef-hook

  <hr />
      <h1>What is useRef?</h1>
      <p>useRef + hook + allows + mutable object + ref + current property + hold any values + Dom Element + state / props + and persists between renders </p>
      <p>
        useRef is a hook that allows you to create a mutable object called a
        "ref" that has a current property. The current property can hold any
        value, such as a DOM element reference, and persists between renders.
        Unlike state (useState) or props, changing the current property of a
        useRef does not trigger a re-render of the component.
      </p>
      <h1>Why do we need useRef?</h1>
      <p>useRef is useful in several scenarios:</p>
      <ol>
        <li>
          <b> Accessing and Managing DOM Elements:</b> You can use useRef to
          access DOM elements directly and interact with them, like focusing an
          input field or measuring their dimensions.
        </li>
        <li>
          <b> Storing Previous Values:</b> It's handy for storing and accessing
          values that should not trigger re-renders but need to be preserved
          between renders, such as previous props or state values.
        </li>
        <li>
          <b> Managing Timers and Intervals:</b> You can use useRef to manage
          and cancel timers or intervals, ensuring that they persist between
          renders and get cleaned up when the component unmounts.
        </li>
        <li>
          <b> Force Re-renders:</b> Although not recommended in most cases, you
          can force a component to re-render by updating a ref's current
          property without changing the component's state or props.
        </li>
      </ol>
      <h1>Where to Use useRef?</h1>
      <p>Here are some common use cases for useRef:</p>
      <ol>
        <li>
          Accessing and Managing DOM Elements: When you need to interact with
          specific DOM elements within a component, like handling focus,
          scrolling, or measuring dimensions.
        </li>
        <li>
          Caching Values: When you want to store and access previous values of
          props or state, especially in useEffect for comparisons.
        </li>
        <li>
          Managing Timers and Intervals: For managing timers and intervals,
          especially when you need to clear them when the component unmounts.
        </li>
        <li>
          Creating Mutable Variables: As a replacement for instance variables in
          class components, to store mutable values that do not trigger
          re-renders.
        </li>
      </ol>
      <p>
        useRef can be a powerful tool, it should be used thoughtfully, and
        direct manipulation of the DOM should be minimized in favor of React's
        declarative approach whenever possible.
      </p>
    
