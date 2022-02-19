import { Injectable } from "@nestjs/common";
import { db } from "src/db";

@Injectable()
export class StudentService {
  private db = db;

  async getAllStudents() {
    return this.db.student;
  }
}
