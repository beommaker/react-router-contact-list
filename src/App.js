import React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>

    <Route exact path="/" component={Welcome} />
    <Route path="/contacts" component={Contacts} />
  </header>
)

const Welcome = () => <h3> Welcome to the best contacts app!</h3>;

const Contacts = ({ match }) => (
  <ul>
    <li>
      <Link to={`${match.path}/beom`}>Beom</Link>
    </li>
    <li>
      <Link to={`${match.path}/daji`}>Daji</Link>
    </li>
    <li>
      <Link to={`${match.path}/yoonje`}>Yoonje</Link>
    </li>
    <li>
      <Link to={`${match.path}/jay`}>Jay</Link>
    </li>

    <Route 
      exact path={match.path}
      render={() => <h3>Please select a contact</h3>}
    />
    <Route path={`${match.path}/:contactName`} component={Contact} />
  </ul>
);

// const Contact = ({ match }) => JSON.stringify(match);

const Contact = ({ match }) => (<h3>Your contact name is: {`${match.params.contactName}`}</h3>);



export default App;
