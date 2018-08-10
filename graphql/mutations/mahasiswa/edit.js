import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
  } from 'graphql';
  import models from '../../../models/index.js';
  import Mahasiswa from '../../types/mahasiswa';
  
  export default {
    type: Mahasiswa,
    args: {
        id: {type: new GraphQLNonNull(GraphQLID)}, 
        mahasiswa: {type:  GraphQLString},
        nim: {type:  GraphQLString}
    },
    resolve (source, args) {
      return models.Mahasiswa
        .findById(args.id)
        .then((mahasiswa) => {
          return mahasiswa.update(args);
        });
    }
  };
  