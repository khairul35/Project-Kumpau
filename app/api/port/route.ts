import { NextRequest, NextResponse } from "next/server";
import { db } from '@/app/drizzle/db';
import { PortBaitTable, PortTable, PortTargetTable, PortTechniqueTable } from "@/app/drizzle/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";


export async function GET() {
    const ports = await db.select().from(PortTable)
        .leftJoin(PortTargetTable, eq(PortTable.id, PortTargetTable.portId))
        .leftJoin(PortBaitTable, eq(PortTable.id, PortBaitTable.portId))
        .leftJoin(PortTechniqueTable, eq(PortTable.id, PortTechniqueTable.portId));
    return NextResponse.json(ports, { status: 200 });
};
