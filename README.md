# Portfolio Website

This is a React-based portfolio website built with Vite.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chaudhary-223/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To run the development server:
```bash
npm run dev
```

## Build

To build the project for production:
```bash
npm run build
```

## Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended for manual deployment)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```
   Follow the prompts to configure your deployment.

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using GitHub Integration

1. Push your code to GitHub (if not already done).

2. Go to [Vercel](https://vercel.com) and sign in.

3. Click "New Project" and import your GitHub repository.

4. Configure the project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Click "Deploy".

### Additional Configuration

If needed, you can add a `vercel.json` file in the root directory for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null
}
```

## Project Structure

- `src/`: Source code
- `public/`: Static assets
- `dist/`: Build output (generated)

## Technologies Used

- React 18
- Vite
- ESLint