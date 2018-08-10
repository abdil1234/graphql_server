import models from '../../../models/index.js';
import Mahasiswa from '../../types/mahasiswa';

const {
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');


export default {
    type: Mahasiswa,
    args: {
        mahasiswa: {type: new GraphQLNonNull(GraphQLString)},
        nim: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve (source, args) {
        return models.Mahasiswa.build({
            mahasiswa: args.mahasiswa,
            nim: args.nim
        }).save().then(function(newMahasiswa) {            
            return models.Mahasiswa.findById(newMahasiswa.id);
        });
    }
};
