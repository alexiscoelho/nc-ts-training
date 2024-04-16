import type { AppRouter } from '@app/server';
import { createTRPCReact } from '@trpc/react-query';

export const apiClient = createTRPCReact<AppRouter>();
