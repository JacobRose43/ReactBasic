const Person = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h1', { key: '1' }, props.name),
		React.createElement('p', { key: '2' }, props.occupation),
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', { className: 'title', key: 'title' }, 'React is Rendered'),
		React.createElement(Person, { name: 'Jacob', occupation: 'Student', key: '3' }, null),
		React.createElement(Person, { name: 'Kevin', occupation: 'Teacher', key: '4' }, null),
		React.createElement(Person, { name: 'David', occupation: 'DevOps Developer', key: '5' }, null),
		React.createElement(Person, { name: 'Matthew', occupation: 'Frontend Developer', key: '6' }, null),
	]);
	//three arguments of React.createElement: !!!!!!!!!!!!!!!!!!!!!!!!!!
	// first - compontent
	// second - object key value pair, like class/id/any other PROPS
	// third - children / text
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
// OLDER VERSION OF RENDERING

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
// NEWER VERSIO OF RENDERING, react version 18 >
