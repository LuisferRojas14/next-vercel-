import Link from 'next/link';
import {MaintLayout} from '../components/layouts/MaintLayout';


export default function Contact() {
  return (
    <MaintLayout>
        <h1>Estas en el contact</h1>
        <h1 className={'title'}>
         {/* Ir a <a href="/about">About</a>*/}
         Ir a <Link href={"/Pricing"}>PrincingPage</Link>
        </h1>
          <p className={'description'}>
          </p>
    </MaintLayout>
  )
}

