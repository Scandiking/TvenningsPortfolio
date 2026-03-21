import React, { useState } from 'react';
import { Tabs, Tab } from '@heroui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Drop-in replacement for <div className="flex w-full flex-col"><Tabs>...</Tabs></div>.
 * Animates tab content on page load and on every tab switch.
 *
 * Usage: same as HeroUI Tabs — pass <Tab key="foo" title="Bar">content</Tab> as children.
 * All extra props are forwarded to the underlying <Tabs> component.
 */
function AnimatedTabs({ children, defaultSelectedKey, ...tabsProps }) {
    const tabs = React.Children.toArray(children);

    // React prefixes keys with ".$" in Children.toArray — strip it to get the real key string
    const getKey = (child) => String(child.key).replace(/^\.\$/, '');

    const firstKey = tabs.length > 0 ? getKey(tabs[0]) : '';
    const [selected, setSelected] = useState(defaultSelectedKey ?? firstKey);

    const activeTab = tabs.find((tab) => getKey(tab) === String(selected));

    return (
        <div className="flex w-full flex-col">
            <Tabs
                {...tabsProps}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(String(key))}
            >
                {tabs.map((tab) => (
                    <Tab key={getKey(tab)} title={tab.props.title} />
                ))}
            </Tabs>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selected}
                    className="mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    {activeTab?.props?.children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default AnimatedTabs;
