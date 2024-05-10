import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      console.log('MONGODB_URI ---->', process.env.MONGODB_URI);

      return mongoose.connect(process.env.MONGODB_URI, {
        serverApi: {
          version: '1',
          deprecationErrors: true,
          strict: true,
        },
      });
    },
  },
];
