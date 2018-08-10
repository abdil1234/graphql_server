import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';


const userType = new GraphQLObjectType({
    name:'user',
    fields:() => ({
        id: {type:GraphQLID},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});

export default userType;