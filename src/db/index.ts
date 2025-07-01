import { Sqlite } from "../adapters/sqlite";

const database = new Sqlite();

database.open({
    filename: "database.db",
    initOptions: {
        timeout: 5000,
    }
})

database.init();
