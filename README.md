# MiniItemCatalog

A modern product catalog application built with React.

## Features

- **Responsive Design**: Mobile and desktop compatible
- **Search and Filtering**: Search by product name, filter by category
- **Multi-page Structure**: Page routing with React Router
- **Modern UI**: Aesthetic design with Tailwind CSS
- **API Integration**: Real data with Fake Store API
- **Star Rating**: Product ratings and review counts
- **Loading States**: Loading animations
- **Error Handling**: Error management

## Technologies

- **React 18** - Modern React hooks and functional components
- **React Router DOM** - Page routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Fetch API** - HTTP requests

## Installation

1. Clone the project:
```bash
git clone https://github.com/krefikk/MiniItemCatalog.git
cd MiniItemCatalog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open `http://localhost:3000` in your browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Page header
│   └── ProductCard.js  # Product card component
├── pages/              # Page components
│   ├── ProductList.js  # Home page - product list
│   └── ProductDetail.js # Product detail page
├── services/           # API services
│   └── api.js         # API calls
├── App.js             # Main application component
├── index.js           # Application entry point
└── index.css          # Global styles
```

## API Usage

The application uses [Fake Store API](https://fakestoreapi.com/):

- `GET /products` - Get all products
- `GET /products/:id` - Get specific product details
- `GET /products/categories` - Get categories

## Feature Details

### Home Page (ProductList)
- Display products in grid layout
- Search box for filtering by product name
- Category dropdown for category filtering
- Clear filters button
- Result count display
- Loading and error states

### Product Detail Page (ProductDetail)
- Product image and information
- Price and category information
- Star rating system
- Product description
- Breadcrumb navigation
- "Add to Cart" and "Go Back" buttons

### Responsive Design
- Mobile: 1 column
- Tablet: 2-3 columns
- Desktop: 4-5 columns
- 2-column layout on detail page

## Build

For production build:
```bash
npm run build
```

## Test

To run tests:
```bash
npm test
```
