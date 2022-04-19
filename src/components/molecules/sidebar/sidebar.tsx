import {useRouter} from 'next/router';
import {ButtonItem, MenuGroup, Section} from '@atlaskit/menu';

import {faCode, faFont} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

import style from './sidebar.module.css';

export default function Sidebar() {
  return (
    <section className={style.section}>
      <MenuGroup>
        <Section title="Text Tools">
          <MenuItem href="/gadgets/string-utilities" text="String Utilities" icon={faFont} />
        </Section>

        <Section title="Encode & Decode">
          <MenuItem href="/gadgets/base64-encode-decode" text="Base64" icon={faCode} />
        </Section>
      </MenuGroup>
    </section>
  );
}

declare type IMenuItemProps = {
  href: string;
  text: string;
  icon: IconProp;
}

function MenuItem(props: IMenuItemProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(props.href).catch(console.error);
  }

  const iconBefore = (
    <div className={style.menuItemIcon}>
      <FontAwesomeIcon icon={props.icon} fixedWidth/>
    </div>
  );

  return (
    <ButtonItem iconBefore={iconBefore} onClick={onClick}>
      {props.text}
    </ButtonItem>
  );
}
