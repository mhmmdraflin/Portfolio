import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { 
  insertProjectSchema, 
  insertCertificateSchema, 
  insertTechStackSchema,
  insertUserSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the resume/CV file
  app.get('/John_Doe_CV.pdf', (req, res) => {
    // This is a placeholder - in a real application, you would serve a real PDF file
    // For this demo, we'll create a simple text response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=John_Doe_CV.pdf');
    
    // Send a placeholder message
    res.send('This is a placeholder for John Doe\'s CV');
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real app, you would store this in a database or send an email
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Successfully processed the contact form
      return res.status(200).json({ message: 'Message received! Thank you for contacting us.' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Failed to process your message. Please try again later.' });
    }
  });

  // API endpoints for portfolio data
  
  // Projects API
  app.get('/api/projects', async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ message: 'Failed to fetch projects' });
    }
  });
  
  app.get('/api/projects/category/:category', async (req, res) => {
    try {
      const { category } = req.params;
      const projects = await storage.getProjectsByCategory(category);
      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects by category:', error);
      return res.status(500).json({ message: 'Failed to fetch projects by category' });
    }
  });
  
  app.post('/api/projects', async (req, res) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const newProject = await storage.createProject(projectData);
      return res.status(201).json(newProject);
    } catch (error) {
      console.error('Error creating project:', error);
      return res.status(400).json({ message: 'Invalid project data' });
    }
  });
  
  // Certificates API
  app.get('/api/certificates', async (_req, res) => {
    try {
      const certificates = await storage.getCertificates();
      return res.status(200).json(certificates);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      return res.status(500).json({ message: 'Failed to fetch certificates' });
    }
  });
  
  app.post('/api/certificates', async (req, res) => {
    try {
      const certificateData = insertCertificateSchema.parse(req.body);
      const newCertificate = await storage.createCertificate(certificateData);
      return res.status(201).json(newCertificate);
    } catch (error) {
      console.error('Error creating certificate:', error);
      return res.status(400).json({ message: 'Invalid certificate data' });
    }
  });
  
  // Tech Stack API
  app.get('/api/tech-stack', async (_req, res) => {
    try {
      const techStack = await storage.getTechStack();
      return res.status(200).json(techStack);
    } catch (error) {
      console.error('Error fetching tech stack:', error);
      return res.status(500).json({ message: 'Failed to fetch tech stack' });
    }
  });
  
  app.post('/api/tech-stack', async (req, res) => {
    try {
      const techData = insertTechStackSchema.parse(req.body);
      const newTech = await storage.createTechStack(techData);
      return res.status(201).json(newTech);
    } catch (error) {
      console.error('Error creating tech stack item:', error);
      return res.status(400).json({ message: 'Invalid tech stack data' });
    }
  });
  
  // User management
  app.post('/api/users', async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByUsername(userData.username);
      
      if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
      }
      
      const newUser = await storage.createUser(userData);
      // Don't return the password in the response
      const { password, ...userWithoutPassword } = newUser;
      return res.status(201).json(userWithoutPassword);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(400).json({ message: 'Invalid user data' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
