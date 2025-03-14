import { PrismaClient } from '@prisma/client';

const prismaClientSingelton = () => {
    return new PrismaClient();
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingelton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingelton();

if(process.env.NODE_ENV === 'production') globalThis.prismaGlobal = prisma;