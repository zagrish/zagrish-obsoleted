import Link from 'next/link';

import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import style from './header.module.css';

export default function Header() {
  return (
    <section className={style.section}>
      <div className={style.brand}>
        <Link href="/">
          <a href="#">
            Irving Dinh
          </a>
        </Link>
      </div>

      <div className={style.nav}>
        <NavItem href="/" text="About"/>
        <NavItem href="/" text="Terms of Service"/>
        <NavItem href="/" text="Privacy Policy"/>
        <NavItem href="/" text="Contact"/>
      </div>

      <div className={style.social}>
        <SocialItem href="https://github.com/zagrish/zagrish" text="GitHub"/>
        <SocialItem href="https://www.linkedin.com/in/irvingdinh" text="LinkedIn"/>
      </div>
    </section>
  );
}

declare type INavItemProps = {
  href: string;
  text: string;
  isActive?: boolean;
}

function NavItem(props: INavItemProps) {
  const classNames = [style.navItem];
  if (props.isActive) {
    classNames.push(style.navItemActive);
  }

  return (
    <div className={classNames.join(' ')}>
      <Link href={props.href}>
        <a href="#">
          <span>{props.text}</span>
        </a>
      </Link>
    </div>
  );
}

declare type ISocialItemProps = {
  href: string;
  text: string;
}

function SocialItem(props: ISocialItemProps) {
  return (
    <div className={style.socialItem}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <span>{props.text}</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} fixedWidth/>
      </a>
    </div>
  );
}
