'use client';
import { Box, Tabs, Text } from '@radix-ui/themes';
import styles from './page.module.scss';
import logo from '../../public/Logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image width={140} height={70} src={logo} alt="logo" />
      </header>

      <Tabs.Root defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger className={styles.trigger} value="account">
            Хімчиска меблів
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.trigger} value="documents">
            Прання килимів
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.trigger} value="settings">
            Клініг
          </Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="account">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">
              Edit your profile or update contact information.
            </Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
}
