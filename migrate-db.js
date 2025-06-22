#!/usr/bin/env node

const { Client } = require('pg');

async function migrateDatabase() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres' // Connect to default database first
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Check if database exists
    const dbExists = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'qarijee'"
    );

    if (dbExists.rows.length === 0) {
      console.log('Creating database: qarijee');
      await client.query('CREATE DATABASE qarijee');
      console.log('Database created successfully');
    } else {
      console.log('Database qarijee already exists');
    }

    await client.end();

    console.log('\n✅ Database setup completed!');
    console.log('\n📋 Next steps:');
    console.log('1. Start your NestJS application: npm run start:dev');
    console.log('2. The application will automatically:');
    console.log('   - Create all tables based on TypeORM entities');
    console.log('   - Seed initial data (courses and admin user)');
    console.log('3. Your data is now persisted in PostgreSQL!');
    console.log('\n🔗 Database connection details:');
    console.log('   Host: localhost:5432');
    console.log('   Database: qarijee');
    console.log('   Username: postgres');
    console.log('   Password: postgres');

  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    console.log('\n💡 Make sure PostgreSQL is running and accessible');
    console.log('   You can start PostgreSQL with: brew services start postgresql (macOS)');
    process.exit(1);
  }
}

migrateDatabase(); 