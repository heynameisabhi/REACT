import Header from './Header';
import Footer from './Footer';
import  './App.css';

const App = () => {
return (
<div style={{ textAlign: 'center' }}>
<Header title="React Props Demo" />
<main>
<h2>Welcome to the React Props Example!</h2>
<p>This demonstrates passing props from parent to child components.</p>
</main>
<Footer copyright="© 2025 MyReactApp. All rights reserved." />
</div>
);
};
export default App;