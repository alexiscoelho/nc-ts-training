import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { apiClient } from '@nc-ts-training/api-client-lib';
import NxWelcome from './nx-welcome';

import './app.scss';

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    apiClient.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:4200',
          // You can pass any HTTP headers you wish here
          /* async headers() {
            return {
              authorization: getAuthCookie(),
            };
          }, */
        }),
      ],
    })
  );

  return (
    <apiClient.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <NxWelcome title="nc-ts-training" />
      </QueryClientProvider>
    </apiClient.Provider>
  );
}

export default App;
