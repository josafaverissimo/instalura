import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Instalura - Projeto Do alura Bootcamp';
  const title = hasHeadTitle ? headTitle : baseTitle;
  const description = 'Aprenda Programação, Front-end, Data Science, UX, DevOps, Marketing, Inovação e Gestão na maior plataforma de tecnologia do Brasil';
  const image = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const urlBase = 'https://www.alura.com.br/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string.isRequired,
};
