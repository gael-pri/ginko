'use client'

import { useSearchParams } from 'next/navigation';
import { useGetAllCategoryQuery, useGetAllSectionQuery,useGetAllChapterQuery, useGetAllArticleQuery } from '../generated/graphql-types';
import styles from './cahier.module.css';

export default function Page() {

  const { data: categoryData } = useGetAllCategoryQuery();
  const categories = categoryData?.categories || [];

  const { data: sectionData } = useGetAllSectionQuery();
  const sections = sectionData?.sections || [];

  const { data: chapterData } = useGetAllChapterQuery();
  const chapters = chapterData?.chapters || [];

  const { data: articleData } = useGetAllArticleQuery();
  const articles = articleData?.articles || [];

  const searchParams = useSearchParams()

  /////////////////////
  // Les catégories
  if (searchParams.has("cid") == true) {
    const search = searchParams.get('cid')

    return (
      <div>
        {categories
          .filter((category) => category?.id === search)
          .map((category) => (
  
                <><h2>{category?.name}</h2><p>{category?.description}</p></>
  
        ))}
      </div>
    )
  }

  ///////////////////////////
  // Les sections
  if (searchParams.has("sid") == true) {
    const search = searchParams.get('sid')
    
    return (
      <div className={styles.sectionPage}>
        {sections
          .filter((section) => section?.id_section === search)
          .map((section) => (
            <>
                  <h1>{section?.name}</h1>
                  
                  {chapters
                    .filter((chapter) => chapter?.sectionId === section?.id_section)
                    .map((chapter) => (
                      <div className={styles.chapter}>
                        <h2>{chapter?.title}</h2>
                        <p>{chapter?.description}</p>

                        {articles
                          .filter((article) => article?.chapterId === chapter?.id_chapter)
                          .map((article) => (
                            <>
                              <h2>{article?.title}</h2>
                              <p>{article?.description}</p>
                            </>
                        ))}
                      </div>
                  ))}

                </>
  
        ))}
      </div>
    )
  }

}