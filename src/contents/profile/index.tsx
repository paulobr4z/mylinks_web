import React, { useEffect, useState } from 'react';
import { Avatar } from '../../components/Avatar';
import { LinkPrimary } from '../../components/Links';
import api from '../../services/api';
import { ProfileContentContainer, UserNameContainer } from './styles';

interface ICustomer {
  id: number;
  attributes: {
    name: string;
    username: string;
    email: string;
    avatar: string
    links: {
      instagram: string;
      tiktok: string;
    }
  }
}

export function ProfileContent({ username }: any) {
  const [customer, setCustomer] = useState<ICustomer>();

  useEffect(() => {    
    async function onGetCustomer() {
      const { data } = await api.get(`/customers?filters[username][$eq]=${username}`);

      setCustomer(data.data[0]);
    }

    onGetCustomer();
  }, []);

  return (
    <ProfileContentContainer>
      <Avatar imageUrl={customer?.attributes.avatar} />
      <UserNameContainer>
        <p>{`@${customer?.attributes.username}`}</p>
      </UserNameContainer>
      <LinkPrimary linkText='Instragram' href={customer?.attributes.links.instagram} />
      <LinkPrimary linkText='Twitter' />
      <LinkPrimary linkText='Telegram' />
      <LinkPrimary linkText='Website' />
    </ProfileContentContainer>
  );
}