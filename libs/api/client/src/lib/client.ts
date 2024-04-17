import type { AppRouter } from '@api/server-lib';
import { createTRPCReact } from '@trpc/react-query';

export const apiClient = createTRPCReact<AppRouter>();
