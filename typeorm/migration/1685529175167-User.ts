/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1685529175167 implements MigrationInterface {
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-empty-function
    public async up(queryRunner: QueryRunner): Promise<void> {
       queryRunner.createTable(new Table({
         name: "id", 



       }));
}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
