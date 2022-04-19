import { connect } from '../../deps.ts';

// The reason for dupplicating the connection info.
// is to separate the source that will be consumed by
// the application and for migrations.
export const connection = await connect({
    type: "mysql",
    port: 3306,
    database: "deno",
    hostname: "172.17.0.2",
    username: "root",
    password: "kamisama123"
});

export const manager = connection.getManager();