import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div
        className="h-screen flex items-center justify-center flex-col"
        style={{ marginTop: '-8vh' }}
      >
        <div className="text-7xl font-bold text-gray-700">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p className="py-3">Page not found.</p>
      </div>
    </>
  );
}
