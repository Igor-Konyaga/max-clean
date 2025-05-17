import { FC } from 'react';
import styles from './PriceTabs .module.scss';
import { priceTabs } from '../../../model/constants';
import { Box, Tabs } from '@radix-ui/themes';

const PriceTabs: FC = () => {
  return (
    <Tabs.Root className={styles.priceTabs} defaultValue="furniture">
      <Tabs.List className={styles.list}>
        {priceTabs.map((tab) => (
          <Tabs.Trigger
            className={styles.trigger}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Box pt="8">
        {priceTabs.map((tab) => {
          const isEven = tab.id % 2 === 0;
          return (
            <Tabs.Content key={tab.id} value={tab.value}>
              {tab.content(isEven)}
            </Tabs.Content>
          );
        })}
      </Box>
    </Tabs.Root>
  );
};

export { PriceTabs };
