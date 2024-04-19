import { NextRequest, NextResponse } from "next/server";
import { db } from '@/app/drizzle/db';
import { PortBaitTable, PortTable, PortTargetTable, PortTechniqueTable } from "@/app/drizzle/schema";
import { eq } from "drizzle-orm";
import { CreatePortRequest } from "./props";


export async function GET() {
    const ports: any[] = await db.select().from(PortTable);
    const baits = await db.select().from(PortBaitTable);
    const targets = await db.select().from(PortTargetTable);
    const techniques = await db.select().from(PortTechniqueTable);
    for (const port of ports) {
        port.bait = baits
            .filter((bait) => bait.portId === port.id)
            .map((bait) => bait.bait);

        port.target = targets
            .filter((target) => target.portId === port.id)
            .map((target) => target.target);

        port.technique = techniques
            .filter((technique) => technique.portId === port.id)
            .map((technique) => technique.technique);
    }
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

    return NextResponse.json('Successfully created port', { status: 200 });
};


