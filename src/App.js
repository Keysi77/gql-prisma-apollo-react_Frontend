import React from 'react';
import ApolloBoost from 'apollo-boost';
import User from './components/User/User';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloBoost({
	uri: 'http://localhost:4000/'
});

const App = () => (
	<ApolloProvider client={client}>
		<h1> Users: </h1>
		<User />
	</ApolloProvider>
);

export default App;
