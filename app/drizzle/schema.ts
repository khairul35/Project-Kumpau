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

export const UsersTable = pgTable("Users", {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name').notNull(),
    username: varchar('username').notNull(),
    password: varchar('password').notNull(),
    email: varchar('email').notNull(),
});

export const KomplotTable = pgTable("Komplots", {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name').notNull(),
    description: text('description').notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    startDate: timestamp("start_date").defaultNow().notNull(),
    endDate: timestamp("end_date"),
    startTime: timestamp("start_time").notNull(),
    endTime: timestamp("end_time"),
    portId: integer('port_id').notNull().references(() => PortTable.id),
    createdBy: integer('created_by').notNull().references(() => UsersTable.id),
});

export const KomplotAttendeesTable = pgTable("KomplotAttendees", {
    id: serial('id').primaryKey().notNull(),
    komplotId: integer('komplot_id').notNull().references(() => KomplotTable.id),
    userId: integer('user_id').notNull().references(() => UsersTable.id),
});

