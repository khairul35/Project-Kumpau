import {
    timestamp,
    text,
    pgTable,
    serial,
    integer,
    varchar,
    boolean
} from 'drizzle-orm/pg-core';

export const PortTable = pgTable("Ports" , {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name').notNull(),
    state: varchar('state').notNull(),
    fees: integer('fees').default(0),
    description: text('description').notNull(),
    isLegal: boolean('is_legal').default(true),
    createdAt: timestamp("created_at").defaultNow(),
});
