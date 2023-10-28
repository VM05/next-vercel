import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { FC, CSSProperties } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const currentRoute = usePathname();

  return (
    <Link href={href} style={currentRoute == href ? style : undefined}>
      {text}
    </Link>
  );
};
