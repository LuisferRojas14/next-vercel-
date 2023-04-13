import Link from 'next/link'
import { MaintLayout } from '../components/layouts/MaintLayout';
import { DartLayout } from '../components/layouts/DartLayout'
export default function About() {
  return (
    <>
      <h1>Estás en el about</h1>
        <h1 className={'title'}>
          {/*Ir a <a href="/"> index</a>*/}
          Ir a <Link href={"/contact"}>Contact</Link>
        </h1>
          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.tsx</code>
          </p>  
    </>
  )
}

About.getLayout = function getLayout (page:JSX.Element){
return (
<MaintLayout>
  <DartLayout>
    {page}
  </DartLayout>
</MaintLayout>

)
}
