import { MigrationInterface, QueryRunner } from "typeorm"

export class userTable1672664573269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
              "name" varchar(100) NOT NULL, 
              "email" varchar(100) NOT NULL,
              "phoneNumber" varchar(100),
              "age" integer,
              CONSTRAINT "PK_abce4cc8fe598f242af45e52896" PRIMARY KEY ("id"))`
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
