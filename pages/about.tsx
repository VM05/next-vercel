import { DarkLayout } from '@/layouts/DarkLayout';
import { MainLayout } from '@/layouts/MainLayout';
import Link from 'next/link';

const about = () => {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={'title'}>
        Ir a <Link href={'/'}>Home</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/about.tsx</code>
      </p>
    </>
  );
};

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default about;
