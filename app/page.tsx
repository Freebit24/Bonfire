'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { FlameLogo } from '@/components/common/flame-logo';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function RootPage() {
  const router = useRouter();
  const { user, loading, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/home');
      } else {
        router.push('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <FlameLogo size={96} className="mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Bonfire
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Discover local events happening around you
        </p>
        <LoadingSpinner size="lg" />
      </div>
    </div>
  );
}