import {MigrationInterface, QueryRunner} from "typeorm";

export class Maratona1588736831252 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> 
    {
        await queryRunner.query(`CREATE TABLE "maratona" ("id" varchar PRIMARY KEY NOT NULL, "aula" varchar(255) NOT NULL, "createDate" datetime NOT NULL DEFAULT (datetime('now')), "updateDate" datetime NOT NULL DEFAULT (datetime('now')), "deleteDate" datetime)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> 
    {
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
    }

}
