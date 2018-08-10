import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';


const MahasiswaType = new GraphQLObjectType({
    name:'Mahasiswa',
    fields:() => ({
        id: {type:GraphQLID},
        nim: {type: GraphQLString},
        mahasiswa: {type: GraphQLString}
    })
});

export default MahasiswaType;