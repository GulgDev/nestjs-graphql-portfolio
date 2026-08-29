import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaLibSql } from '@prisma/adapter-libsql';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      adapter: new PrismaLibSql({
        url: process.env.DATABASE_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN,
      }),
    });
  }
}
