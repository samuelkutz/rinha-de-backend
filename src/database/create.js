import Database from "./database.js";

const PESSOAS_TABLE = `
    CREATE TABLE IF NOT EXISTS "pessoas" (
        "id_pessoa" INTEGER NOT NULL, 
        "apelido" VARCHAR(32) UNIQUE NOT NULL,
        "nome" VARCHAR(100) NOT NULL,
        "nascimento" CHAR(10) NOT NULL,
        "stack" TEXT
    );
`;

// cria a tabela pessoas
Database.run(PESSOAS_TABLE, (error) => {
    if (error) {
        console.error("Erro ao criar tabela pessoas: ", error);
    } else {
        console.log("Tabela pessoas criada com sucesso!");
    }
});