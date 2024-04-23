import { consumeAPI } from '../api/consumeAPI'
import DetailsProd from './DetailsProd'

export default async function Page () {
  const products = await consumeAPI()

  return (
    <DetailsProd products={products} />
  )
}
