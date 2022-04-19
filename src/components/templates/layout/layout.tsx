import {ReactElement} from 'react';
import Breadcrumbs, {BreadcrumbsItem} from '@atlaskit/breadcrumbs';
import Head from 'next/head';
import HomeIcon from '@atlaskit/icon/glyph/home';
import Link from 'next/link';
import PageHeader from '@atlaskit/page-header';

import Header from 'src/components/molecules/header/header';
import Sidebar from 'src/components/molecules/sidebar/sidebar';

import style from './layout.module.css';

declare type ILayoutProps = {
  breadcrumbs?: Array<IBreadcrumbItemProps>;
  title?: string;
  children?: ReactElement | Array<ReactElement>;
}

export default function Layout(props: ILayoutProps) {
  return (
    <section className={style.section}>
      <Head>
        <title>{props.title ? props.title + ' - Irving Dinh' : 'Irving Dinh'}</title>
      </Head>

      <Header/>

      <Sidebar/>

      <div className={style.container}>
        {props.title && (
          <PageHeader breadcrumbs={buildBreadcrumb(props.breadcrumbs)}>
            {props.title}
          </PageHeader>
        )}

        {props.children}
      </div>
    </section>
  );
}

declare type IBreadcrumbItemProps = {
  href?: string;
  text: string;
}

function buildBreadcrumb(breadcrumbs: Array<IBreadcrumbItemProps>): ReactElement {
  if (typeof breadcrumbs === 'undefined' || breadcrumbs.length < 1) {
    return null;
  }

  return (
    <Breadcrumbs>
      <Link href="/" passHref>
        <BreadcrumbsItem iconAfter={<HomeIcon label="Home" size="small"/>} text=""/>
      </Link>

      {breadcrumbs && breadcrumbs.map((e: IBreadcrumbItemProps) => (
        <BreadcrumbsItem key={e.text} text={e.text}/>
      ))}
    </Breadcrumbs>
  );
}
