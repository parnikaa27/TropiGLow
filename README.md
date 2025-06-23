# CoatMaster Pro - Paint & Coatings Company Website

A professional website for a paint and coatings company built with React, TypeScript, and Tailwind CSS, featuring a complete contact form API with MongoDB integration.

## Features

- **Modern React Frontend**: Built with TypeScript and Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact Form API**: Node.js/Express backend with MongoDB storage
- **Product Showcase**: Comprehensive product categories and gallery
- **Smooth Navigation**: Scroll-to-section functionality
- **Professional UI**: Premium design with interactive elements

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for development and building

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- CORS enabled for cross-origin requests
- Environment variable configuration

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd coatmaster-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/coatmaster-pro
   PORT=5000
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system or update the `MONGODB_URI` to point to your MongoDB Atlas cluster.

### Development

**Option 1: Run both frontend and backend together**
```bash
npm run dev:full
```

**Option 2: Run separately**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:5000`.

## API Endpoints

### Contact Form API

- **POST** `/api/contact` - Submit contact form
- **GET** `/api/contacts` - Get all contact submissions (admin)
- **PATCH** `/api/contacts/:id/status` - Update contact status
- **GET** `/api/health` - Health check

### Contact Form Schema

```javascript
{
  name: String (required),
  email: String (required),
  phone: String (optional),
  message: String (required),
  submittedAt: Date (auto-generated),
  status: String (enum: 'new', 'read', 'responded')
}
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   └── main.tsx
├── server/
│   └── index.js
├── .env
└── package.json
```

## Features in Detail

### Contact Form
- Real-time form validation
- Loading states and error handling
- Success/error feedback
- Data persistence to MongoDB
- Admin panel ready (view submissions)

### Navigation
- Smooth scroll to sections
- Responsive mobile menu
- Product dropdown with categories
- Sticky header design

### Product Gallery
- Category filtering
- Carousel navigation
- Hover effects and animations
- Professional project showcase

### Services Section
- Service cards with icons
- Feature lists
- Call-to-action integration

## Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
```

### Backend (Railway/Heroku)
Make sure to set environment variables:
- `MONGODB_URI`
- `PORT`

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/coatmaster-pro` |
| `PORT` | Server port | `5000` |
| `VITE_API_URL` | API base URL for frontend | `http://localhost:5000/api` |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.