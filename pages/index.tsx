import {MaintLayout} from '../components/layouts/MaintLayout';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MaintLayout>
      
      <h1>Estas en el index</h1>
        <h1 className={'title'}>
         {/* Ir a <a href="/about">About</a>*/}
         Ir a <Link href="/about">About</Link>
        </h1>
          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>
    </MaintLayout>
  )
}

