# bookhub



## Tech
➡︎ JavaScript <br>
➡︎ NodeJS <br>
➡︎ MySQL <br>
➡︎ Postman <br>

## Testando a API

No terminal da IDE:
```  
npm add express ip dotenv 
```
```  
npm add nodemon -D
```

```  
npm install sequelize express 
```
```  
npm install -D sequelize-cli 
```

```  
npx sequelize init
```
```  
npm add mysql2 
```
```  
npm add cors 
```
```  
npx sequelize migration:generate --name create
```
_________________

👉 No arquivo de configurações, adicionar os atributos login e senha do banco.

👉 Adicionar a função await no arquivo de migração:
```  
await queryInterface.createTable('books', { 
  bookCode: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  author:{
    type: Sequelize.STRING
  },
  publisher:{
    type: Sequelize.STRING
  },
  releaseYear:{
    type: Sequelize.INTEGER
  },
  typeList:{
    type: Sequelize.STRING
  }
});
```
## No terminal da IDE
```  
npx sequelize db:migrate
```

## ✨ Finalmente rodar
```  
npm run dev
```
