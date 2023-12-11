import { Button, ConfigProvider, Menu, MenuProps, Row, Switch, Tooltip } from 'antd';
import React, { useState } from 'react';
import { TranslationOutlined } from '@ant-design/icons';
import useGeneralStore from '@/stores/useGeneralStore';
import { useShallow } from 'zustand/react/shallow';

const NavMenu = () => {
  const [current, setCurrent] = useState('home');

  const { theme, language, toggleTheme, toggleLanguage } = useGeneralStore(
    useShallow((state) => ({
      theme: state.theme,
      language: state.language,
      toggleTheme: state.toggleTheme,
      toggleLanguage: state.toggleLanguage,
    }))
  );

  const menuItems = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'about',
      label: 'About',
    },
    {
      key: 'projects',
      label: 'Projects',
    },
    {
      key: 'contact',
      label: 'Contact',
    },
    {
      key: 'blogs',
      label: 'Blogs',
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    const key = e.key;
    if (key === 'language' || key === 'theme') return;
    setCurrent(key);
  };

  return (
    <>
      <Menu
        // theme='dark'
        mode='horizontal'
        onClick={onClick}
        selectedKeys={[current]}
        items={menuItems}
        className='w-full justify-end'
      />
      <div style={{ marginInlineEnd: '12px' }}>
        <Tooltip title='English/中文'>
          <TranslationOutlined
            onClick={toggleLanguage}
            className='p-2 rounded-md cursor-pointer hover:bg-icon-hover'
            style={{ fontSize: '16px' }}
          />
        </Tooltip>
      </div>
      <Switch
        checkedChildren='Dark'
        unCheckedChildren='Light'
        style={{ width: '70px' }}
        onChange={toggleTheme}
      />
    </>
  );
};

export default NavMenu;
