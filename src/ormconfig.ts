import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const ormconfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'root',
  password: 'secret',
  database: 'medium-clone'
}

export { ormconfig }