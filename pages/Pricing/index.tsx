import Link from 'next/link'
import React from 'react'
import { MaintLayout } from '../../components/layouts/MaintLayout'




export default function PricingPage() {
  return (
    <MaintLayout>
      <h1>Estas en PricingPage</h1>
      <h1 className={'title'}>
         Ir a <Link href="/">Home</Link>
        </h1>
          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/PricingPage.tsx</code>
          </p>
    </MaintLayout>
  )
  
}


