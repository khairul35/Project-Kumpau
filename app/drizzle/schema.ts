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

export const PortTargetTable = pgTable("PortTargets", {
    id: serial('id').primaryKey().notNull(),
    target: varchar('target').notNull(),
    portId: integer('port_id').notNull().references(() => PortTable.id),
});

export const PortBaitTable = pgTable("PortBaits", {
    id: serial('id').primaryKey().notNull(),
    bait: varchar('bait').notNull(),
    portId: integer('port_id').notNull().references(() => PortTable.id),
});

export const PortTechniqueTable = pgTable("PortTechniques", {
    id: serial('id').primaryKey().notNull(),
    technique: varchar('technique').notNull(),
    portId: integer('port_id').notNull().references(() => PortTable.id),
});
