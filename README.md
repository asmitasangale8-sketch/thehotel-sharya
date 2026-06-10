# The Hotel Sharya

A luxury hotel and restaurant website built with HTML, CSS, JavaScript, and Node.js.

## Features

- **Homepage** - Welcome page with hotel information and services
- **Menu** - Restaurant menu with breakfast, lunch, dinner, desserts, and beverages
- **Reservations** - Online room booking system
- **Gallery** - Showcase of hotel facilities and rooms
- **Contact** - Contact form and hotel information
- **Responsive Design** - Mobile-friendly interface
- **Backend API** - Express.js server with reservation and contact endpoints

## Project Structure

```
thehotel-sharya/
├── public/
│   ├── index.html
│   ├── menu.html
│   ├── reservations.html
│   ├── gallery.html
│   ├── contact.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/asmitasangale8-sketch/thehotel-sharya.git
cd thehotel-sharya
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file:
```bash
cp .env.example .env
```

4. Update .env with your configuration

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (optional)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome

## Pages

### 1. Homepage (index.html)
- Hero section with call-to-action
- About the hotel
- Room types and pricing
- Services offered

### 2. Menu (menu.html)
- Breakfast menu
- Lunch menu
- Dinner menu
- Desserts and beverages
- Dietary information

### 3. Reservations (reservations.html)
- Room booking form
- Guest information
- Check-in/check-out dates
- Room type selection
- Special requests

### 4. Gallery (gallery.html)
- Photo gallery of hotel facilities
- Room images
- Restaurant and spa images
- Conference and garden views

### 5. Contact (contact.html)
- Contact information
- Contact form
- Google Maps integration
- Operating hours

## API Endpoints

### POST /api/reservations
Submit a room reservation

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "guests": "2",
  "checkIn": "2026-06-15",
  "checkOut": "2026-06-18",
  "roomType": "deluxe",
  "specialRequests": "Early check-in requested"
}
```

### POST /api/contact
Submit a contact form

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I would like to know more about your wedding packages."
}
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb://localhost:27017/thehotel-sharya
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-password
JWT_SECRET=your-secret-key
```

## CSS Variables

The design uses CSS variables for easy customization:

```css
--primary-color: #8b7355 (Brown)
--secondary-color: #d4af37 (Gold)
--text-color: #333 (Dark)
--light-bg: #f5f5f5 (Light Gray)
--white: #ffffff (White)
```

## Responsive Design

- Desktop: Full layout
- Tablet (768px): Adjusted grid and spacing
- Mobile (480px): Single column layout, optimized navigation

## Future Enhancements

- [ ] Database integration for reservations
- [ ] Email confirmation system
- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] Room availability calendar
- [ ] Reviews and ratings system
- [ ] Multi-language support

## License

MIT License - feel free to use this project for your own purposes.

## Author

Asmita Sangale (@asmitasangale8-sketch)

## Support

For support, email info@hotelsharya.com or contact +1 (555) 123-4567
