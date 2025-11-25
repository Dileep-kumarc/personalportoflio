# Dileep Kumarsi - Portfolio Website

A modern, creative portfolio website with a stunning dark gradient design, glassmorphism effects, and smooth animations. Built with pure HTML, CSS, and JavaScript.

## 🌟 Features

- **Modern Dark Theme**: Beautiful black-to-brown gradient background matching the reference design
- **Glassmorphism UI**: Translucent cards with backdrop blur effects
- **Smooth Animations**: Floating icons, scroll reveal animations, and hover effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling with active link highlighting
- **Complete Sections**:
  - Hero section with animated floating tech icons
  - About section with contact information
  - Skills showcase with 11+ technologies
  - Projects with detailed descriptions and tags
  - Work experience timeline
  - Certificates & achievements
  - Education history
  - Contact form with social links

## 🎨 Design Highlights

- **Color Scheme**: 
  - Primary: Orange (#FF5722)
  - Background: Black to Brown gradient
  - Cards: Glassmorphism with subtle borders
- **Typography**: Clean, modern fonts with excellent readability
- **Icons**: Font Awesome 6.4.0 for all icons
- **Animations**: Floating tech icons, scroll reveals, and smooth transitions

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Open `index.html`** in your web browser
3. That's it! No build process or dependencies required.

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🛠️ Customization Guide

### Update Personal Information

**In `index.html`:**

1. **Contact Details** (Line 32-35):
   ```html
   <p class="greeting">Hey, I am <span class="highlight">Your Name</span></p>
   <h1 class="hero-title">Your Title</h1>
   ```

2. **Email & Social Links** (Line 96-109):
   - Update email address
   - Add your LinkedIn, GitHub URLs

3. **Projects** (Line 172-210):
   - Add/remove project cards
   - Update project descriptions and tags

4. **Experience** (Line 218-250):
   - Update work experience details
   - Modify dates and descriptions

5. **Certificates** (Line 258-295):
   - Add your certificates
   - Update dates and issuing organizations

6. **Education** (Line 303-341):
   - Update educational qualifications
   - Modify institutions and grades

### Customize Colors

**In `styles.css`** (Lines 7-16):

```css
:root {
    --primary-color: #FF5722;      /* Change to your brand color */
    --secondary-color: #FF7043;    /* Lighter shade */
    --bg-gradient-start: #000000;  /* Background start color */
    --bg-gradient-end: #2d1810;    /* Background end color */
}
```

### Add More Skills

**In `index.html`** (Skills section):

```html
<div class="skill-card">
    <i class="fab fa-your-icon"></i>
    <h3>Your Skill</h3>
</div>
```

### Add Resume Download

**In `script.js`** (Line 86):

```javascript
downloadBtn.addEventListener('click', () => {
    window.open('path/to/your/resume.pdf', '_blank');
});
```

## 🎯 Features Breakdown

### Hero Section
- Large animated title with typing effect
- Floating technology icons (HTML, CSS, JS, React, Python, Java)
- Call-to-action buttons
- Testimonial card with glassmorphism

### Skills Section
- Grid layout with 11 technology cards
- Hover animations with color transitions
- Font Awesome icons for each skill

### Projects Section
- Detailed project cards with descriptions
- Technology tags for each project
- GitHub and live demo links
- Hover effects with shadow

### Experience Section
- Timeline layout with connecting line
- Date badges in primary color
- Company and role information
- Detailed descriptions

### Certificates Section
- Grid of certificate cards
- Icons for different achievement types
- Date badges
- Hover animations

### Education Section
- Three-card layout for different education levels
- Institution names and locations
- Grades and years
- Icon differentiation

### Contact Section
- Two-column layout
- Contact information display
- Working contact form
- Social media links
- Email integration

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 968px
- **Mobile**: Below 768px

Mobile features include:
- Hamburger menu for navigation
- Single-column layouts
- Optimized font sizes
- Touch-friendly buttons

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 To-Do / Future Enhancements

- [ ] Add actual resume PDF file
- [ ] Connect contact form to backend/email service
- [ ] Add project screenshots/images
- [ ] Implement dark/light theme toggle
- [ ] Add blog section
- [ ] Include testimonials from clients
- [ ] Add loading animation
- [ ] Implement lazy loading for images

## 🤝 Connect

- **Email**: dileepkmr.c@gmail.com
- **Location**: Hassan, India
- **LinkedIn**: [Add your LinkedIn URL]
- **GitHub**: [Add your GitHub URL]

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

## 🙏 Credits

- **Design Inspiration**: Modern portfolio design with glassmorphism
- **Icons**: Font Awesome
- **Fonts**: System fonts (Segoe UI)

---

**Made with ❤️ by Dileep Kumarsi**

*Last Updated: October 2025*
