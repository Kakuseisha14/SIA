export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    habits: '/dashboard/habits',
    finances: '/dashboard/finances',
    projects: '/dashboard/projects',
    integrations: '/dashboard/integrations',
    history: '/dashboard/history',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
