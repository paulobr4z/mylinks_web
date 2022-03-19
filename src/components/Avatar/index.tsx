import Image from 'next/image';
import { AvatarContainer } from './styles';

interface IAvatar {
  imageUrl?: string
  username?: string
}

export function Avatar({
  imageUrl,
  username
}: IAvatar) {
  return (
    <AvatarContainer>
      <Image
        src={imageUrl || '/assets/avatar.png'} 
        alt={username}
        height={96}
        width={96}
      />
    </AvatarContainer>
  );
}