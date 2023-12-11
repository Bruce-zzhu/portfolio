'use client';

import {
  Typography,
  Button,
  ConfigProvider,
  Input,
  Space,
  theme as antdTheme,
  Layout,
  Row,
  Col,
} from 'antd';
import Link from 'next/link';
import { NavMenu } from '../components';
import useGeneralStore from '@/stores/useGeneralStore';

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const theme = useGeneralStore((state) => state.theme);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        components: {
          Layout: {
            headerBg: theme === 'light' ? 'white' : undefined,
          },
        },
      }}
    >
      <Layout>
        <Header>
          <Row>
            <Col xxl={{ span: 4 }} xl={{ span: 5 }} lg={{ span: 6 }} md={{ span: 6 }}>
              <b>LOGO</b>
            </Col>
            <Col
              className='flex items-center'
              xxl={{ span: 20 }}
              xl={{ span: 19 }}
              lg={{ span: 18 }}
              md={{ span: 18 }}
            >
              <NavMenu />
            </Col>
          </Row>
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}
