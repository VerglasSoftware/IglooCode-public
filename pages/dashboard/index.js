import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from "../../components/dashboard/layout";

export default function Index() {
  const { user, error, isLoading } = useUser();

  return user && (
        <Layout title={"Dashboard"}>
        <p>{user.email}</p>
      </Layout>
  );
}
