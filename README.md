# Task Management Application

A responsive task management web application built with Nuxt 3, featuring dark mode support and real-time data persistence.

## Setup

Make sure to install dependencies:

````bash
# npm
npm install


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

````

## Linting & Formatting

To check for linting errors:

# npm

npm run lint

To fix linting errors automatically:

# npm

npm run lint:fix

## Project is deployed using Vercel.

## Technologies Used

- Frontend Framework: Nuxt 3
- Node Version: 20.11.1
- State Management: Pinia
- Database: Firebase
- Styling: SCSS
- Type Safety: TypeScript
- Code Quality: ESLint, Prettier

### Features

# Task Management

- Create tasks (via button click or Enter key)
- sort tasks
- Edit existing tasks
- Delete tasks
- Filter tasks by completion status
- Track task completion progress with a progress bar
- View task statistics through dashboard cards

# Technical Features

- Dark mode support
- Responsive design (mobile-friendly)
- Data persistence using Firebase
- Component auto-imports
- Code splitting
- TypeScript type safety
- SCSS features:
  ** Reusable mixins
  ** Global variables
  \*\* Media queries

## UI/UX Considerations

- Custom dark mode color scheme
- Smart filter button visibility management to prevent layout shifts
- Progress visualization through dashboard cards
- Intuitive task creation with multiple input methods

Additional Implementation Details
Styling
The project uses SCSS for enhanced styling capabilities, including:

Custom mixins for reusable styles
Global variables for consistent theming
Responsive design through media queries

## Performance Optimization

- Implemented code splitting for better load times
- Utilized Nuxt's auto-import feature for components
- Efficient state management with Pinia

## Data Persistence

# firebase database integration ensures:

- Real-time data updates
- Data persistence across page refreshes
- Efficient data management

## Code Quality

- ESLint configuration for code consistency
- Prettier for automated code formatting
- TypeScript for enhanced type safety

## Notes

- Dark mode implementation was added as an enhancement to the original design
- Mobile responsiveness was implemented as an additional feature
