import * as React from 'react';
class Person {
    constructor(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
    }
    getName() {
	return this.firstName + ' ' + this.lastName;
    }
}

const list = [
    {
	title: 'React',
	url: 'https://reactjs.org/',
	author: 'Jordan Walke',
	num_comments: 3,
	points: 4,
	objectID:0,
    },
    {
	title: 'Redux',
	url: 'https://redux.js.org/',
	author: 'Dan Abramov, Andrew Clark',
	num_comments: 2,
	points: 5,
	objectID:1,
    },
];
const people = [new Person('Robin', 'Wieruch'),
		new Person('Rozdvsdvbin', 'Wieruchsadfdferferf')];
function App() {
    return (
	<div>
	    <h1>My Hacker Stories</h1>
	    <Search />
	    <hr />
	    <List />
	    <ListPeople />
	</div>
    );
}
function Search() {
    return (
	<div>
	    <label htmlFor="search">Search: </label>
	    <input id="search" type="text" />
	</div>
    );
}
function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}
function ListPeople() {
    console.log(people);
  return (
    <ul>
	{people.map(function (item) {
	    console.log(item);
        return (
          <li>
              <span>{item.getName()}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
