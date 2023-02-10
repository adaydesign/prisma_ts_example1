# ตัวอย่างการเพิ่มข้อมูลใน Prisma กรณี Many-to-Many

## install
```
npm install
```

## prisma setup
### 1) ครั้งแรก
```
npx prisma db push
```
### 2) หากมีการปรับ model ในไฟล์ schema.prisma
```
npx prisma migrate dev --name [migration-name]
```

## run
```
npx ts-node index.ts
```


## ตัวอย่างโค้ด
- https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-express : Next.js
- https://github.com/prisma/prisma-examples/tree/latest/typescript/remix : Remix