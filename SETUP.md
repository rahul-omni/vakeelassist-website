# Legal AI Integration Setup

This guide explains how to integrate your FastAPI legal RAG service with the Next.js website.

## Prerequisites

1. Your FastAPI server running on `localhost:8000`
2. Next.js development server running
3. CORS properly configured on your FastAPI server

## Setup Instructions

### 1. Environment Configuration

Create a `.env.local` file in the root directory with:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 2. FastAPI CORS Configuration

Make sure your FastAPI server has CORS properly configured. Your current setup looks good, but verify these settings:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 3. Start the Services

1. **Start your FastAPI server:**
   ```bash
   python your_fastapi_app.py
   # or
   uvicorn your_fastapi_app:app --host 0.0.0.0 --port 8000
   ```

2. **Start the Next.js development server:**
   ```bash
   npm run dev
   ```

### 4. Test the Integration

1. Navigate to `http://localhost:3000/supreme-court-cases`
2. Check the API status indicator at the top
3. Try searching for legal questions using the search interface

## Features Added

### API Integration (`src/lib/api.ts`)
- TypeScript interfaces for API responses
- Error handling and request management
- Configurable API base URL

### Search Component (`src/components/LegalSearch.tsx`)
- Natural language query interface
- Loading states and error handling
- Expandable judgment results
- Relevance scoring display

### Status Component (`src/components/ApiStatus.tsx`)
- Real-time API health monitoring
- Database statistics display
- Connection status indicator

### Updated Supreme Court Cases Page
- Live demo instead of "Coming Soon"
- Functional search interface
- API status monitoring
- Improved user experience

## Troubleshooting

### CORS Issues
If you see CORS errors in the browser console:
1. Ensure your FastAPI server is running
2. Check that CORS middleware is properly configured
3. Verify the API URL in `.env.local`

### API Connection Issues
1. Check that your FastAPI server is running on port 8000
2. Verify the health endpoint: `http://localhost:8000/health`
3. Check browser network tab for failed requests

### Database Issues
1. Ensure your ChromaDB is properly initialized
2. Check the `/api/stats` endpoint for database status
3. Verify your judgment data is loaded

## Production Deployment

For production deployment:

1. Update the API URL in `.env.local` to your production FastAPI server
2. Configure proper CORS origins for your production domain
3. Set up proper SSL certificates
4. Consider using environment variables for different environments

## API Endpoints Used

- `GET /health` - API health check
- `GET /api/stats` - Database statistics
- `POST /query` - Search judgments

The frontend automatically handles:
- Request/response formatting
- Error handling
- Loading states
- Result display 