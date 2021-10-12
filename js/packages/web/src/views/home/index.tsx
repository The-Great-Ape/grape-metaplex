import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { AuctionListView } from './auctionList';
import { SetupView } from './setup';
import { Redirect } from 'react-router-dom';

export const HomeView = () => {
  return (
    <Redirect to="/auction/DkPFgBcbeRMi6RzoAzF8nf2cCCMd47sQaLidY9uQrU17" />
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
