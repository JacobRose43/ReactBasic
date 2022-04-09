const React = require('react');
const ReactDOM = require('react-dom');

function MyComponent() {
	return <div>Hello World</div>;
}

//prettier-ignore
ReactDOM.render(
    [
        <MyComponent />
    ],
    document.getElementById('root')
);
