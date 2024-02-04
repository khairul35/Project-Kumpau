ALTER TABLE "Ports" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "Ports" ADD COLUMN "state" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "Ports" ADD COLUMN "fees" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "Ports" ADD COLUMN "is_legal" boolean DEFAULT true;