export default {

   schema: './src/db/schema.js',

   out: './drizzle',

   dialect: 'postgresql',

   dbCredentials: {

       host: '127.0.0.1',

       port: 5432,

       user: 'AS_Admin_24',

       password: 'Khai_Course',

       database: 'nodejs_course_database',

       ssl: false,

   },

};