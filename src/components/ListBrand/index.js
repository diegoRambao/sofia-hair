import skalaIcon from '../../assets/images/skala.svg'
import cantuIcon from '../../assets/images/cantu.svg'
import { List, Image } from './style'

export function ListBrand() {
   return (
      <List>
         <Image src={skalaIcon} alt="skala logo" />
         <Image src={cantuIcon} alt="cantu logo" />
         <Image src={skalaIcon} alt="skala logo" />
         <Image src={cantuIcon} alt="cantu logo" />
      </List>
   )
}
