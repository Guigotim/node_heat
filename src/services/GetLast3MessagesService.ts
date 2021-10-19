import PrismaClient from "../prisma";

class GetLast3MessagesService {

    async execute() {
        const message = await PrismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true,
            }
        });

        return message;
    }

}

export { GetLast3MessagesService }