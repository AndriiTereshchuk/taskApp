import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const cache = new InMemoryCache({
    typePolicies: {
        Installment: {
            keyFields: false,
        }
    }
})

const httpLink = createHttpLink({
    uri: 'http://192.168.50.96:9000/graphql',
});

const errorLink = onError((error) => {
    console.dir(error);
})

const authLink = setContext(({ headers }) => {
    return {
        headers,
    }
})

export default new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache,
})