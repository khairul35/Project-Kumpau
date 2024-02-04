import { NextRequest, NextResponse } from "next/server";
import { db } from '@/app/drizzle/db';
import { PortBaitTable, PortTable, PortTargetTable, PortTechniqueTable } from "@/app/drizzle/schema";
import { eq } from "drizzle-orm";
import { CreatePortRequest } from "./props";


export async function GET() {
    const ports = await db.select().from(PortTable)
        .leftJoin(PortTargetTable, eq(PortTable.id, PortTargetTable.portId))
        .leftJoin(PortBaitTable, eq(PortTable.id, PortBaitTable.portId))
        .leftJoin(PortTechniqueTable, eq(PortTable.id, PortTechniqueTable.portId));
    return NextResponse.json(ports, { status: 200 });
};

export async function POST(req: NextRequest) {
    const body: CreatePortRequest = await req.json();

    /** Create a new Port */
    const port = await db.insert(PortTable).values({
        name: body.name,
        state: body.state,
        fees: body.fees,
        description: body.description,
        isLegal: body.isLegal || false,
    }).returning();
    
    /** Add Target for every port */
    await db.insert(PortTargetTable).values(body.target.map((e: string) => {
        return {
            portId: port[0].id,
            target: e,
        };
    }));

    /** Add Bait for every port */
    await db.insert(PortBaitTable).values(body.bait.map((e: string) => {
        return {
            portId: port[0].id,
            bait: e,
        };
    }));

    /** Add Technique for every port */
    await db.insert(PortTechniqueTable).values(body.technique.map((e: string) => {
        return {
            portId: port[0].id,
            technique: e,
        };
    }));
};
