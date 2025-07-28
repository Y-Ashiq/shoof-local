# Shoof Local Client

A modern, responsive web application for browsing and managing local brands. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

### Public Features
- **Brand Discovery**: Browse a curated collection of local brands with beautiful card-based UI
- **Advanced Search**: Real-time search functionality with instant results
- **Tag Filtering**: Filter brands by categories using an intuitive tag system
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Brand Details**: Click on any brand to view detailed information in a modal
- **Social Media Integration**: Direct links to brand social media profiles with custom icons
- **Pagination**: Navigate through large collections of brands efficiently

### Admin Features
- **Dashboard**: Secure admin panel for brand management
- **Brand Management**: Add, edit, and delete brands
- **Status Control**: Manage brand approval status (pending, approved, rejected)
- **Search & Filter**: Advanced search and filtering capabilities in the admin panel
- **Authentication**: Secure login system for admin access

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans, Geist Mono, Abril Fatface
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoof-local-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=https://shoof-local.onrender.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:4000`


## 🎨 Key Components

### BrandCard
- Displays brand information in an attractive card format
- Supports custom brand colors and contrast calculation
- Shows brand image, name, description, and tags
- Clickable to open detailed modal

### BrandModal
- Detailed view of brand information
- Social media links with custom icons
- Responsive design for all screen sizes

### TagFilter
- Interactive tag filtering system
- URL-synchronized state management
- Dropdown interface for tag selection

### Navbar
- Search functionality with live results
- Responsive navigation design
- Brand logo and navigation links

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 4000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 API Integration

The application integrates with a backend API hosted at `https://shoof-local.onrender.com`:

- **Brands**: Fetch, search, and filter brands
- **Tags**: Retrieve available tags for filtering
- **Authentication**: Admin login and token management
- **Dashboard**: Admin-only brand management endpoints

## 🎯 Features in Detail

### Search & Filtering
- Real-time search with debounced API calls
- Tag-based filtering with URL synchronization
- Combined search and filter functionality
- Responsive search results display

### Brand Display
- Grid layout with responsive breakpoints
- Custom brand colors with automatic contrast calculation
- Tag display with overflow handling
- Loading states and error handling

### Admin Dashboard
- Secure authentication required
- Brand status management (pending/approved/rejected)
- Bulk operations and individual brand editing
- Search and filter capabilities
- Pagination for large datasets

## 🚀 Deployment

The application is configured for easy deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common issues

---

Built with ❤️ using Next.js and React
