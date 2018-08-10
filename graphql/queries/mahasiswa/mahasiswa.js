import {
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  
import models from '../../../models/index.js';
import Mahasiswa from '../../types/mahasiswa.js';


  
  
  export default {
    type: Mahasiswa,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args, context) {
        return models.Mahasiswa.findById(args.id);
    }
};
  