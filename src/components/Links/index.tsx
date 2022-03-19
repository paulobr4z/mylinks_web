import Link from 'next/link';
import {
  LinkPrimaryContainer,
} from './styles';

interface ILinkPrimary {
  linkText: string
  href?: string
}

export function LinkPrimary({
  linkText = 'link',
  href = '#'
}: ILinkPrimary) {
  return (
    <LinkPrimaryContainer>
      <Link href={href} >
        <p>{linkText}</p>
      </Link>
    </LinkPrimaryContainer>
  );
}