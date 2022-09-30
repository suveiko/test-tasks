# 3. Key Prop Example

Review following code snippet and answer questions:

1. What’s wrong with this code snippet?
2. How can we improve it?
3. Are there any cases when this code can be used with no modification?

Code:

```
interface Book {
  id: string;
  name: string;
}

export const BooksList: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <ul>
     { books.map((book, i) => <li key={i}>{book.name}</li>}) }
    </ul> 
   )
}
```

Answers:

1. What’s wrong with this code snippet?

   - React does not recommend using indexes as keys if the order of elements may change. This will adversely affect performance and may cause problems with the state of the component.
   - I would do a destructuring in the map.
   - Map is written in one line, which to me is a minus because it affects readability.
   - We can remove the return if there is no logic in our component.

2. How can we improve it?

```
interface Book {
  id: string;
  name: string;
}

export const BooksList: FC<{ books: Book[] }> = ({ books }) => (
  <ul>
    {books.map(({ name, id }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);
```

3. Are there any cases when this code can be used with no modification?

This code can only be used when we draw the data and no longer interact with it, but I would still go back to the option I suggested.