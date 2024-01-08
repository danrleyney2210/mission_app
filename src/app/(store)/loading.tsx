import { Skeleton } from '@/components/skeleton'
import Image from 'next/image'
import Load from '../../../public/load.svg'

export default function HomeLoading() {
  return (
    <div className="h-[560px] flex justify-center items-center">
      <div>
        <Image src={Load} alt="Loading" width={80} />
        <p>Carregando...</p>
      </div>
    </div>
  )
}
