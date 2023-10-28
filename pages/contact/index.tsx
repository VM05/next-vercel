import Link from 'next/link';
import { MainLayout } from '@/layouts/MainLayout';

const contact = () => {
  return (
    <MainLayout>
      <h1>contact Page</h1>

      <h1 className={'title'}>
        Ir a <Link href={'/'}>Home</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/contact.tsx</code>
      </p>
    </MainLayout>
  );
};

export default contact;
