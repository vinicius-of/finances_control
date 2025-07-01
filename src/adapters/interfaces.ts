export interface DatabaseAdapter {
    connection: unknown
    db: unknown
    open(options: Record<string, unknown>): void
    close(): void
}

export type Repository<T> = {
    findOne: (find: Partial<T>) => T | undefined,
    findAll: (find: Partial<T>) => T[],
    insertOne: (insert: T) => boolean,
    updateOne: (update: T) => boolean,
    deleteOne: (toDelete: T) => boolean 
}