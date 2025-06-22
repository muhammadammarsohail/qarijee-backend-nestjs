# Database Migration Guide

This guide will help you migrate from in-memory data storage to PostgreSQL database using TypeORM.

## 🚀 Quick Start

### 1. Prerequisites
- PostgreSQL installed and running
- Node.js and npm installed

### 2. Install Dependencies
```bash
npm install pg @types/pg
```

### 3. Run Migration Script
```bash
node migrate-db.js
```

### 4. Start Application
```bash
npm run start:dev
```

## 📊 What's Been Migrated

### ✅ Completed
- **Entities Created**: All TypeORM entities for database tables
- **Course Service**: Updated to use TypeORM repositories
- **Teacher Service**: Updated to use TypeORM repositories
- **Database Seeder**: Automatically seeds initial data
- **TypeORM Configuration**: Updated to include all entities

### 🔄 Still Using In-Memory (Need Update)
- Student Service
- Assessment Service
- Admin Service
- Classroom Service
- Auth Service
- Utils (authentication functions)

## 🗄️ Database Schema

### Tables Created
1. **users** - Authentication data (existing)
2. **teachers** - Teacher information and profiles
3. **students** - Student information
4. **admins** - Admin users
5. **courses** - Course definitions with books
6. **classrooms** - Classroom sessions
7. **assessments** - Student assessments

### Relationships
- Teachers ↔ Classrooms (One-to-Many)
- Students ↔ Classrooms (One-to-Many)
- Courses ↔ Classrooms (One-to-Many)
- Teachers ↔ Assessments (One-to-Many)
- Students ↔ Assessments (One-to-Many)
- Courses ↔ Assessments (One-to-Many)

## 🔧 Configuration

### Database Connection
```typescript
// src/config/typeorm.config.ts
{
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'qarijee',
  entities: [User, Teacher, Student, Admin, Course, Classroom, Assessment],
  synchronize: true, // Auto-create tables (disable in production)
}
```

### Initial Data Seeded
- **Courses**: 5 courses (tajweed, hifz, qiraat, tafseer, hadees) with books
- **Admin**: Default admin user (admin@qarijee.com)

## 🛠️ Next Steps

### 1. Update Remaining Services
The following services still need to be updated to use TypeORM:

```bash
# Files that need updating:
src/student/student.service.ts
src/assessment/assessment.service.ts
src/admin/admin.service.ts
src/classroom/classroom.service.ts
src/auth/auth.service.ts
src/utils/utils.ts
```

### 2. Update Modules
Add TypeORM repositories to each module:

```typescript
// Example for student module
@Module({
  imports: [TypeOrmModule.forFeature([Student, Teacher, Course])],
  controllers: [StudentController],
  providers: [StudentService]
})
```

### 3. Test Migration
1. Start the application
2. Check database tables are created
3. Verify seeded data exists
4. Test API endpoints

## 🔍 Database Verification

### Connect to Database
```bash
psql -h localhost -U postgres -d qarijee
```

### Check Tables
```sql
\dt
```

### Check Seeded Data
```sql
SELECT * FROM courses;
SELECT * FROM admins;
```

## ⚠️ Important Notes

1. **Data Loss**: The in-memory data will be lost when you restart the server
2. **Production**: Set `synchronize: false` in production
3. **Migrations**: Consider using TypeORM migrations for production deployments
4. **Backup**: Always backup your database before major changes

## 🐛 Troubleshooting

### Common Issues

1. **PostgreSQL not running**
   ```bash
   brew services start postgresql  # macOS
   sudo systemctl start postgresql # Linux
   ```

2. **Connection refused**
   - Check if PostgreSQL is running
   - Verify connection details in `typeorm.config.ts`

3. **Permission denied**
   - Ensure PostgreSQL user has proper permissions
   - Check if database exists

4. **Entity not found**
   - Verify all entities are imported in `typeorm.config.ts`
   - Check entity decorators are correct

## 📈 Benefits of Migration

1. **Data Persistence**: Data survives server restarts
2. **Scalability**: Can handle larger datasets
3. **Relationships**: Proper foreign key relationships
4. **Queries**: Advanced querying capabilities
5. **Backup**: Database backup and restore
6. **Production Ready**: Suitable for production deployment

## 🔄 Rollback Plan

If you need to rollback:
1. Stop the application
2. Drop the database: `DROP DATABASE qarijee;`
3. Revert the code changes
4. Restart with in-memory data

---

**Need Help?** Check the TypeORM documentation or create an issue in your repository. 