import { Schema, connect } from "../src/deps.ts";

export async function up(schema: Schema) {
  if (await schema.hasTable("users")) { 
    return; 
  }
  
  await schema.createTable('users', (table) => {
    table.id();
    table.varchar('first_name');
    table.varchar('last_name');
    table.varchar('email').unique();
    table.varchar('password');
    table.boolean('is_active');
    table.timestamps();
  })

}

export async function down(schema: Schema) {
  if (await schema.hasTable('users')) {
    //return;
    //const db = await connect();
    //await connect().table('users').where('is_active', true).delete();
    const db = await connect({
      "type": "mysql",
      "port": 3306,
      "database": "deno",
      "hostname": "172.17.0.2",
      "username": "root",
      "password": "kamisama123"
    });

    db.disconnect();
  }
  
}
