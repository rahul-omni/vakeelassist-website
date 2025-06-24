// Simple test script to verify FastAPI backend connection
const API_BASE_URL = 'http://localhost:8000';

async function testAPI() {
  console.log('Testing FastAPI backend connection...\n');

  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch(`${API_BASE_URL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    console.log('');

    // Test stats endpoint
    console.log('2. Testing stats endpoint...');
    const statsResponse = await fetch(`${API_BASE_URL}/api/stats`);
    const statsData = await statsResponse.json();
    console.log('✅ Stats:', statsData);
    console.log('');

    // Test query endpoint
    console.log('3. Testing query endpoint...');
    const queryResponse = await fetch(`${API_BASE_URL}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: 'What are the damages for breach of contract?',
        num_results: 2
      }),
    });
    const queryData = await queryResponse.json();
    console.log('✅ Query test:', {
      success: queryData.success,
      total_results: queryData.total_results,
      sample_judgment: queryData.judgments?.[0] ? {
        case_number: queryData.judgments[0].case_number,
        score: queryData.judgments[0].score
      } : 'No results'
    });

  } catch (error) {
    console.error('❌ API test failed:', error.message);
    console.log('\nMake sure your FastAPI server is running on localhost:8000');
  }
}

testAPI(); 