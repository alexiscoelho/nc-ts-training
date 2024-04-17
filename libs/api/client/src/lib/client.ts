import type { AppRouter } from '@nc-ts-training/api-server-lib';
import { createTRPCReact } from '@trpc/react-query';

export const apiClient = createTRPCReact<AppRouter>();
