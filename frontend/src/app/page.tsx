// src/app/page.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
import { useGetAllCategoryQuery } from './generated/graphql-types';

export default function Page() {
  // Use the Apollo Client hook to fetch categories
  const { data: categoryData, loading: categoryLoading, error: categoryError } = useGetAllCategoryQuery();

  // Handle loading state
  if (categoryLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Handle errors
  if (categoryError) {
    console.error('Error loading categories:', categoryError);
    return <div className={styles.error}>Error loading categories: {categoryError.message}</div>;
  }

  // Extract categories
  const categories = categoryData?.categories || [];

  return (
    <>
      <div className={styles.center}>
        <h1>Ginko</h1>
      </div>

      <div className={styles.grid}>
        {categories.map((Category) => (
          <div key={Category?.id} className={styles.card}>
            <a href={`/cahier?cid=${Category?.id}`}>
              <h2>
                {Category?.name} <span>-&gt;</span>
              </h2>
              <p>{Category?.description}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
