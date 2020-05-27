
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/2020/05/15/first-day',
  component: ComponentCreator('/blog/2020/05/15/first-day'),
  exact: true,
  
},
{
  path: '/blog/2020/05/16/second-day',
  component: ComponentCreator('/blog/2020/05/16/second-day'),
  exact: true,
  
},
{
  path: '/blog/2020/05/26/thrid-day',
  component: ComponentCreator('/blog/2020/05/26/thrid-day'),
  exact: true,
  
},
{
  path: '/blog/2020/05/27/feature-extration',
  component: ComponentCreator('/blog/2020/05/27/feature-extration'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/loss',
  component: ComponentCreator('/blog/tags/loss'),
  exact: true,
  
},
{
  path: '/blog/tags/ml-5',
  component: ComponentCreator('/blog/tags/ml-5'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/doc1',
  component: ComponentCreator('/docs/doc1'),
  exact: true,
  
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2'),
  exact: true,
  
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3'),
  exact: true,
  
},
{
  path: '/docs/index',
  component: ComponentCreator('/docs/index'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
