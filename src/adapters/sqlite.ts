import Database, { Database as dbInterface, Options } from 'better-sqlite3'

//@ts-ignore
export class Sqlite implements DatabaseAdapter {
    private db?: dbInterface;
    public isDbOpen: boolean = false;

    constructor() {}

    open(options: {
        filename: string,
        initOptions: Options
    }) {
        if (!this.db?.open) {
            const { filename, initOptions } = options;
            this.db = new Database(filename, initOptions);
            this.isDbOpen = true;
        }
    }

    close() {
        if (this.db?.open) {
            this.db.close();
            this.isDbOpen = false;
        }
    }

    init() {
        this.db?.exec(`
            CREATE TABLE IF NOT EXISTS ventures(
                id TEXT PRIMARY KEY NOT NULL
                name TEXT NOT NULL
                value INTEGER NOT NULL
                boughtAt TEXT NOT NULL
                profitability FLOAT
                tributeType TEXT NOT NULL
                archived INTEGER DEFAULT 0
                type TEXT
                createdAt TEXT DEFAULT CURRENT_TIMESTAMP
                updatedAt TEXT
            )
        `)

        this.db?.exec(`
            CREATE TRIGGER update_ventures_updatedAt
            AFTER UPDATE ON ventures
            FOR EACH ROW
            BEGIN
                UPDATE ventures SET updatedAt = CURRENT_TIMESTAMP WHERE id = OLD.id
            END;    
        `)
    }
}