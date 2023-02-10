import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    // สร้าง user 1 คน พร้อมหลาย post 
    // await prisma.user.create({
    //   data: {
    //     name: 'Alice99',
    //     email: 'alice99@prisma.io',
    //     posts: {
    //       create: [
    //         { post: {create:{title:"New Post X1"}}},
    //         { post: {create:{title:"New Post XX2"}}},
    //     ],
    //     },
    //     profile: {
    //       create: { bio: 'I like turtles X13' },
    //     },
    //   },
    // })

    // สร้าง user 1 คน พร้อมหลาย post (post เก่า)
    //   await prisma.user.create({
    //     data: {
    //       name: 'Alice990',
    //       email: 'alice990@prisma.io',
    //       posts: {
    //         create: [
    //           { postId: 1},
    //           { postId: 2},
    //           { postId: 9}
    //       ],
    //       },
    //       profile: {
    //         create: { bio: 'I like turtles X13' },
    //       },
    //     },
    //   })

    // สร้าง post โดยเลือก user ที่มีอยู่แล้ว
    // await prisma.post.create(
    //     {
    //         data:{
    //             title:'Online 333',
    //             users:{
    //                 create:[
    //                     { authorId:1},
    //                     { authorId:3},
    //                     { authorId:4}
    //                 ]
    //             }
    //         }
    //     }
    // )

    // สร้าง post โดยเลือก user ใหม่
    await prisma.post.create(
        {
            data: {
                title: 'Online 55PP',
                users: {
                    create: [
                        { author: {create:{ name: "alice55PP", email: "alice55p@prisma.io" } }},
                        { author: {create:{ name: "alice55PPx", email: "alice55xp@prisma.io" } }}
                    ],
                    
                }
            }
        }
    )

    const allUsers = await prisma.user.findMany({
        include: {
            profile: true,
            posts: {
                include: {
                    post: true
                }
            }
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })