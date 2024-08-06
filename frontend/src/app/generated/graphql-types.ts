import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  chapterId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id_article?: Maybe<Scalars['ID']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Chapter = {
  __typename?: 'Chapter';
  description?: Maybe<Scalars['String']['output']>;
  id_chapter?: Maybe<Scalars['ID']['output']>;
  sectionId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  articles?: Maybe<Array<Maybe<Article>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  chapters?: Maybe<Array<Maybe<Chapter>>>;
  sections?: Maybe<Array<Maybe<Section>>>;
};

export type Section = {
  __typename?: 'Section';
  categoryId?: Maybe<Scalars['String']['output']>;
  id_section?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GetAllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoryQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id?: string | null, name?: string | null, description?: string | null } | null> | null };

export type GetAllSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSectionQuery = { __typename?: 'Query', sections?: Array<{ __typename?: 'Section', id_section?: string | null, name?: string | null, categoryId?: string | null } | null> | null };


export const GetAllCategoryDocument = gql`
    query GetAllCategory {
  categories {
    id
    name
    description
  }
}
    `;

/**
 * __useGetAllCategoryQuery__
 *
 * To run a query within a React component, call `useGetAllCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoryQuery, GetAllCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoryQuery, GetAllCategoryQueryVariables>(GetAllCategoryDocument, options);
      }
export function useGetAllCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoryQuery, GetAllCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoryQuery, GetAllCategoryQueryVariables>(GetAllCategoryDocument, options);
        }
export function useGetAllCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCategoryQuery, GetAllCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCategoryQuery, GetAllCategoryQueryVariables>(GetAllCategoryDocument, options);
        }
export type GetAllCategoryQueryHookResult = ReturnType<typeof useGetAllCategoryQuery>;
export type GetAllCategoryLazyQueryHookResult = ReturnType<typeof useGetAllCategoryLazyQuery>;
export type GetAllCategorySuspenseQueryHookResult = ReturnType<typeof useGetAllCategorySuspenseQuery>;
export type GetAllCategoryQueryResult = Apollo.QueryResult<GetAllCategoryQuery, GetAllCategoryQueryVariables>;
export const GetAllSectionDocument = gql`
    query GetAllSection {
  sections {
    id_section
    name
    categoryId
  }
}
    `;

/**
 * __useGetAllSectionQuery__
 *
 * To run a query within a React component, call `useGetAllSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSectionQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSectionQuery, GetAllSectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSectionQuery, GetAllSectionQueryVariables>(GetAllSectionDocument, options);
      }
export function useGetAllSectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSectionQuery, GetAllSectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSectionQuery, GetAllSectionQueryVariables>(GetAllSectionDocument, options);
        }
export function useGetAllSectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllSectionQuery, GetAllSectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllSectionQuery, GetAllSectionQueryVariables>(GetAllSectionDocument, options);
        }
export type GetAllSectionQueryHookResult = ReturnType<typeof useGetAllSectionQuery>;
export type GetAllSectionLazyQueryHookResult = ReturnType<typeof useGetAllSectionLazyQuery>;
export type GetAllSectionSuspenseQueryHookResult = ReturnType<typeof useGetAllSectionSuspenseQuery>;
export type GetAllSectionQueryResult = Apollo.QueryResult<GetAllSectionQuery, GetAllSectionQueryVariables>;