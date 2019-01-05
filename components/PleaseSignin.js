import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin from './Signin';

const PleaseSignIn = (props) => (
	<Query query={CURRENT_USER_QUERY}>
		{(payload) => {
			if (payload.loading) return <p>Loading...</p>;
			if (!payload.data.me) {
				return (
					<div>
						<p>Please Sign in before continuing</p>
						<Signin />
					</div>
				);
			}
			return props.children;
		}}
	</Query>
);

export default PleaseSignIn;
