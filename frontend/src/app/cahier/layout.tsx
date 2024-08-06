// src/app/cahier/layout.tsx
'use client'

import styles from './cahier.module.css';
import Link from 'next/link';
import { useGetAllCategoryQuery, useGetAllSectionQuery } from '../generated/graphql-types';

export default function CahierLayout({ children }: { children: React.ReactNode }) {
  const { data: categoryData } = useGetAllCategoryQuery();
  const { data: sectionData } = useGetAllSectionQuery();

  const categories = categoryData?.categories || [];
  const sections = sectionData?.sections || [];

  return (
    <div className={styles.section}>
      <div className={styles.menu}>
        <nav>
          <h2>
            <Link href="/">Accueil</Link>
          </h2>
          <ul className={styles.categoryMenu}>
            {categories.map((category) => (
              <li key={category?.id} className={styles.categoryMenu}>
                <Link href={`/cahier?cid=${category?.id}`}>{category?.name}</Link>

                <ul>
                  {sections
                    .filter((section) => section?.categoryId === category?.id)
                    .map((section) => (
                      <li key={section?.id_section} className={styles.sectionMenu}>
                        <Link href={`/cahier?sid=${section?.id_section}`}>{section?.name}</Link>
                      </li>
                    ))}
                </ul>
                
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.page}>{children}</div>
    </div>
  );
}
