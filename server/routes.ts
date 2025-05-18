import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

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

  const httpServer = createServer(app);

  return httpServer;
}
