import {
    GraphQLList    
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Mahasiswa from '../../types/mahasiswa.js';
  
  export default {
    type: new GraphQLList(Mahasiswa),    
    resolve(root, args) {      
      return models.Mahasiswa.findAll();
    }
  };
  