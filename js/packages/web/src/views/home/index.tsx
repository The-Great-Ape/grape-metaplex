import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { AuctionListView } from './auctionList';
import { SetupView } from './setup';
import { Redirect } from 'react-router-dom';

export const HomeView = () => {
  return (
    <Redirect to="/auction/Azbn9BY6vtg67uDHqJtNf6h8NATYW96gpZ5wRzUYSJpx" />
  );
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      {showAuctions ? <AuctionListView /> : <SetupView />}
    </Layout>
  );
};
