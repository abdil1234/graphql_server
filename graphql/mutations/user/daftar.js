import models from '../../../models/index.js';
import user from '../../types/user';
const jsonwebtoken = require('jsonwebtoken');


const {
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');


export default {
    type: user,
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve (source, args, context) {
        const user = models.user.create({
            email:args.email,            
            password: args.password
          });
    
          const token = jsonwebtoken.sign(
            { id: user.id, email: user.email },
            "somesuperdupersecret",
            { expiresIn: '1y' }
          );
          console.log(token);
        // return models.user.build({
        //     id: args.id,
        //     email: args.email,
        //     password: args.password
        // }).save()
        // .then(( user) => {
        //      jsonwebtoken.sign(
        //         {
                    
        //             email: "asasa"
        //         },
        //         "somesuperdupersecret",
        //         { expiresIn: '1y' }
        //       );
        // })
        // .then(function(newUser) {            
        //     return models.user.findById(newUser.id);
        // });
    }
};
