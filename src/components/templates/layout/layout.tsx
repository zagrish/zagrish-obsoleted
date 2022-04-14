import Head from 'next/head';
import PageHeader from '@atlaskit/page-header';

import Header from 'src/components/molecules/header/header';
import Sidebar from "src/components/molecules/sidebar/sidebar";

import style from './layout.module.css';

declare type ILayoutProps = {
  title?: string;
  children?: any;
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
          <PageHeader>
            {props.title}
          </PageHeader>
        )}

        {props.children}
      </div>
    </section>
  );
}
