# DEEWĀN APPAREL
### Premium Haute Streetwear Atelier

DEEWĀN APPAREL is a premium fashion e-commerce platform designed to deliver a modern online shopping experience. The website combines an elegant dark luxury design with product discovery, customer accounts, shopping cart, checkout, order management, and an administrative dashboard.

## Project Overview

DEEWĀN APPAREL aims to provide customers with a smooth and responsive shopping experience across desktop, laptop, tablet, and mobile devices.

**Brand Name:** DEEWĀN APPAREL  
**Category:** Fashion and E-commerce  
**Project Type:** Full-Stack E-commerce Web Application  
**Frontend:** React and Vite  
**Backend:** Node.js and Express.js  
**Database:** SQLite  

## Key Features

### Customer Experience
- Premium homepage and responsive design
- Product catalog and product detail pages
- Product search and discovery
- Shopping cart and checkout
- Customer registration and login
- Customer account management
- Order history and order tracking
- Promo code support
- Cash on Delivery checkout
- WhatsApp order assistance
- Order receipt and printing

### Admin Dashboard
- Admin authentication
- Dashboard analytics
- Product management
- Add, edit, and delete products
- Inventory and stock management
- Low-stock alerts
- Order management
- Customer management
- Sales and business reports
- Packing slips

### Security
- Password hashing with bcrypt
- JWT-based authentication
- Separate customer and admin authentication
- Protected API routes
- Customer-specific order access
- Atomic inventory stock updates
- Environment-based secret management

## Technology Stack

| Area | Technologies |
|---|---|
| Frontend | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Backend | Node.js |
| API | Express.js 5 |
| Database | SQLite |
| Authentication | JWT |
| Password Security | bcrypt |
| Development | JavaScript, HTML, CSS |

## Design System

The website uses a premium dark luxury visual identity.

- Obsidian Velvet: `#09030e`
- Dark Amethyst: `#12071d`
- Metallic Gold: `#d4af37`

The design focuses on elegant typography, product photography, clean layouts, and responsive navigation.

## Project Structure

```text
DEEWAN-APPAREL/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── server/
│   ├── config/
│   ├── data/
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .env.example
├── .gitignore
└── README.md
```

Note: The exact folder structure may vary depending on the current source code.

## Getting Started

### 1. Requirements

Install the following tools:

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

### 2. Clone the Repository

```bash
git clone https://github.com/Anumraheem45/DEEW-N-APPAREL-HAUTE-STREETWEAR-ATELIER.git
```

### 3. Open the Project

```bash
cd DEEW-N-APPAREL-HAUTE-STREETWEAR-ATELIER
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Configure Environment Variables

Create a local `.env` file using the project's `.env.example` as a reference.

Never publish database credentials, JWT secrets, API keys, or passwords.

### 6. Run the Application

Check the available scripts in `package.json` before starting the frontend and backend.

The frontend development URL is:

```text
http://localhost:3000/
```

The backend is configured to use:

```text
http://localhost:5000/
```

## Database

The application uses SQLite for persistent application data.

Database location:

```text
server/data/deewan.db
```

The database includes application records such as products, categories, customers, addresses, orders, order items, and inventory.

Do not upload the production database or private database files to a public repository.

## Project Progress

The following development areas have been implemented:

- Phase 1: Project inspection and assets
- Phase 2: Homepage and design system
- Phase 3: Product catalog and product details
- Phase 4: Shopping cart and checkout
- Phase 5: Customer accounts and authentication
- Phase 6: Admin dashboard and inventory
- Phase 7: Backend, database, and security

### Upcoming Development

- Production hosting and deployment
- Online payment gateway integration
- WhatsApp Business API integration
- Email and SMS notifications
- Automated backups and recovery
- SEO and analytics integration
- Shipping and returns management
- Final end-to-end testing

## Payment Information

The current checkout supports Cash on Delivery.

A live card or bank payment gateway has not yet been integrated.

## Live Website

https://jocular-toffee-11612e.netlify.app/

The current Netlify deployment hosts the frontend build. Full production functionality requires the backend and persistent database to be deployed separately.

## Repository

GitHub:

https://github.com/Anumraheem45/DEEW-N-APPAREL-HAUTE-STREETWEAR-ATELIER

## Development Goals

The long-term goal is to develop DEEWĀN APPAREL into a reliable, scalable, and secure fashion e-commerce platform with a complete customer shopping experience and efficient store management.

## License

All rights reserved.

DEEWĀN APPAREL is a proprietary project. Reuse, redistribution, or commercial use of its source code and brand assets requires permission from the project owner.

---

**DEEWĀN APPAREL**  
Premium Haute Streetwear Atelier  
*Designed for a distinctive shopping experience.*
