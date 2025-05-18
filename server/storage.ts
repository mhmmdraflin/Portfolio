import { 
  users, projects, certificates, techStack,
  type User, type InsertUser,
  type Project, type InsertProject,
  type Certificate, type InsertCertificate,
  type TechStack, type InsertTechStack
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project operations
  getProjects(): Promise<Project[]>;
  getProjectsByUserId(userId: number): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Certificate operations
  getCertificates(): Promise<Certificate[]>;
  getCertificatesByUserId(userId: number): Promise<Certificate[]>;
  createCertificate(certificate: InsertCertificate): Promise<Certificate>;
  
  // Tech stack operations
  getTechStack(): Promise<TechStack[]>;
  getTechStackByUserId(userId: number): Promise<TechStack[]>;
  createTechStack(tech: InsertTechStack): Promise<TechStack>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Project operations
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }
  
  async getProjectsByUserId(userId: number): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.userId, userId));
  }
  
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.category, category));
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }
  
  // Certificate operations
  async getCertificates(): Promise<Certificate[]> {
    return await db.select().from(certificates);
  }
  
  async getCertificatesByUserId(userId: number): Promise<Certificate[]> {
    return await db.select().from(certificates).where(eq(certificates.userId, userId));
  }
  
  async createCertificate(certificate: InsertCertificate): Promise<Certificate> {
    const [newCertificate] = await db.insert(certificates).values(certificate).returning();
    return newCertificate;
  }
  
  // Tech stack operations
  async getTechStack(): Promise<TechStack[]> {
    return await db.select().from(techStack);
  }
  
  async getTechStackByUserId(userId: number): Promise<TechStack[]> {
    return await db.select().from(techStack).where(eq(techStack.userId, userId));
  }
  
  async createTechStack(tech: InsertTechStack): Promise<TechStack> {
    const [newTech] = await db.insert(techStack).values(tech).returning();
    return newTech;
  }
}

export const storage = new DatabaseStorage();
