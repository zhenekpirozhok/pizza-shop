import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { prisma } from "@/prisma";

export const typeDefs = gql`
    type Pizza {
        id: Int
        name: String
        price: Float
        image: String
    }

    type Query {
        pizzas: [Pizza]
        pizza(id: Int): Pizza
    }

    type Mutation {
        createPizza(name: String!, price: Float!, image: String!): Pizza
        updatePizza(id: Int!, name: String!, price: Float!, image: String!): Pizza
        deletePizza(id: Int!): Pizza
    }
`;

export const resolvers = {
    Query: {
        pizzas: async () => {
            return await prisma.pizza.findMany();
        },
        pizza: async (_parent: any, args: { id: number }) => {
            return await prisma.pizza.findUnique({
                where: { id: args.id },
            });
        },
    },
    Mutation: {
        createPizza: async (_parent: any, args: { name: string; price: number; image: string }) => {
            return await prisma.pizza.create({
                data: {
                    name: args.name,
                    price: args.price,
                    image: args.image,
                },
            });
        },
        updatePizza: async (_parent: any, args: { id: number; name: string; price: number; image: string }) => {
            return await prisma.pizza.update({
                where: { id: args.id },
                data: {
                    name: args.name,
                    price: args.price,
                    image: args.image,
                },
            });
        },
        deletePizza: async (_parent: any, args: { id: number }) => {
            return await prisma.pizza.delete({
                where: { id: args.id },
            });
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export const POST = async (req: Request) => handler(req);

export const GET = async (req: Request) => handler(req);