# SSR Fintech Website Layout

## Design System
- **Theme**: Dark gradient (bg: #0a0e1a → #1e1b4b → #0a0e1a)
- **Typography**: Inter font family
- **Colors**: White headings, gray-300/400 text, indigo/purple/pink accents
- **Components**: Glass-morphism cards with backdrop blur, Framer Motion animations

## Pages Structure

### 1. Homepage (/)
- **Hero Section**: Headline, subheading, CTA buttons
- **Services Section**: 6 service cards with icons
- **Stats Section**: 4 key company statistics
- **Testimonials Section**: Client testimonials carousel
- **CTA Section**: Call-to-action with contact link

### 2. About Page (/about)
- **Hero Section**: Page title and description
- **Mission & Vision**: Two-column cards
- **Values Section**: 4 value cards in grid
- **Team Section**: 4 leadership members with avatars
- **CTA Section**: Recruitment call-to-action

### 3. Services - Dynamic Pages (/services/[slug])
- **Hero Section**: Service title with gradient background
- **Description Section**: Service overview
- **Features Section**: Key features list
- **Benefits Section**: 3-column benefits grid
- **CTA Section**: Contact form link

**Available Services** (6):
- financial-tech-consulting
- erp-implementation
- cloud-solutions
- data-analytics-bi
- cybersecurity
- custom-software-development

### 4. Industries - Dynamic Pages (/industries/[slug])
- **Hero Section**: Industry name with icon
- **Overview Section**: Industry description
- **Challenges Section**: Common industry challenges
- **Solutions Section**: How SSR addresses challenges
- **CTA Section**: Consultation offer

**Available Industries** (6):
- banking
- insurance
- wealth-management
- payment-processing
- capital-markets
- fintech-startups

### 5. Case Studies (/case-studies)
- **Hero Section**: Page title and description
- **Case Studies Grid**: 4 detailed case studies with:
  - Client name and industry tag
  - Challenge description
  - Solution implementation
  - Key results with metrics
- **CTA Section**: Project start call-to-action

### 6. Contact Page (/contact)
- **Hero Section**: Page title and description
- **Contact Form**: Name, email, company, phone, message fields
- **Contact Info Cards**: 3 cards with:
  - Physical address
  - Phone number
  - Email address
  - Office hours card

### 7. Careers Page (/careers)
- **Hero Section**: Page title and description
- **Why Join Us**: 3 benefit cards
- **Open Positions**: 4 job listings with:
  - Job title and description
  - Department, location, job type
  - Requirements and responsibilities
  - Apply button
- **Benefits Section**: 4 perks with icons
- **CTA Section**: General application inquiry

## Data Structure
All content stored in modular data files:
- `/data/services.ts` - 6 services
- `/data/industries.ts` - 6 industries
- `/data/testimonials.ts` - 6 client testimonials
- `/data/stats.ts` - 4 statistics
- `/data/team.ts` - 4 team members
- `/data/caseStudies.ts` - 4 case studies
- `/data/jobs.ts` - 4 job listings

## Missing Pages
- Services overview page (/services)
- Industries overview page (/industries)
- Blog/Resources section
- Terms & Privacy pages
