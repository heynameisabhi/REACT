<<<<<<< HEAD
import PropTypes from 'prop-types'; 
const Header = ({ title }) => { 
return ( 
<header> 
<h1>{title}</h1> 
</header> 
); 
}; 
Header.propTypes = { 
title: PropTypes.string.isRequired, 
}; 
export default Header;
=======
import PropTypes from 'prop-types';
const Header = ({ title }) => {
return (
<header>
<h1>{title}</h1>
</header>
);
};
Header.propTypes = {
title: PropTypes.string.isRequired,
};
export default Header;
>>>>>>> 1a58c8cfd0ae64424889195a937fa6c0dfbcc970
