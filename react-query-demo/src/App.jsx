import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // Importing QueryClient and QueryClientProvider from React Query
import PostsComponent from './components/PostsComponent'; // Importing the PostsComponent that you will create

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your app with QueryClientProvider to make React Query available to your components
    <QueryClientProvider client={queryClient}>
      <PostsComponent /> {/* Your PostsComponent here */}
    </QueryClientProvider>
  );
}

export default App;

