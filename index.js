const { ApolloServer } = require('apollo-server');
const mongoose= require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const MONGODB = 'mongodb+srv://raspberryal1214:Cherepashka1.@cluster0.ol2u8gr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const server =new ApolloServer( {
    typeDefs,
    resolvers
})

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB()
server.listen({port: 5000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});