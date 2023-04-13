import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
     uri: 'https://tropemogara.pl/graphql',
     cache: new InMemoryCache()
})

