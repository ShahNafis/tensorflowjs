import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Docs</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The Docs serves as examples on using tensorflow.js along with
        other JavaScript tools (node,ml5,react and so on).
      </>
    ),
  },
  {
    title: <>Blog</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The Blog section serves to show my incremental process, what I learned on what days and in what order.
      </>
    ),
  },
  // {
  //   title: <>Powered by React</>,
  //   imageUrl: 'img/undraw_docusaurus_react.svg',
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`My tensorflow.js doc`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/index')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row row--1" style={{display:'flex',justifyContent:'center'}}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
