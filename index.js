import { app } from './app.js';
import { config } from './config/env.js';
import { seedDatabase } from './db/seed.js';

async function startServer() {
  try {
    // Seed initial archival data into SQLite
    await seedDatabase();

    const server = app.listen(config.port, () => {
      console.log('================================================================');
      console.log(`DEEWĀN APPAREL Atelier Backend API is live on port ${config.port}`);
      console.log(`Environment: ${config.nodeEnv}`);
      console.log(`Database: ${config.dbPath}`);
      console.log(`Health Check: http://localhost:${config.port}/api/health`);
      console.log('================================================================');
    });

    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      console.log('SIGTERM signal received: closing HTTP server');
      server.close(() => {
        console.log('HTTP server closed');
      });
    });

  } catch (err) {
    console.error('Fatal error starting DEEWĀN APPAREL Atelier server:', err);
    process.exit(1);
  }
}

startServer();
