import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faParachuteBox as freeFasFaParachuteBox,
  faStopCircle as freeFasFaStopCircle,
  faMinusCircle as freeFasFaMinusCircle,
  faDotCircle as freeFasFaDotCircle,
  faInfoCircle as freeFasFaInfoCircle,
  faPauseCircle as freeFasFaPauseCircle,
  faChevronRight as freeFasFaChevronRight,
  faPen as freeFasFaPen,
  faCircle as freeFasFaCircle,
  faSortDown as freeFasFaSortDown,
  faFlagUsa as freeFasFaFlagUsa,
  faSearch as freeFasFaSearch,
  faCalculator as freeFasFaCalculator,
  faLongArrowAltDown as freeFasFaLongArrowAltDown,
  faSyncAlt as freeFasFaSyncAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaParachuteBox,
  freeFasFaStopCircle,
  freeFasFaMinusCircle,
  freeFasFaDotCircle,
  freeFasFaInfoCircle,
  freeFasFaPauseCircle,
  freeFasFaChevronRight,
  freeFasFaPen,
  freeFasFaCircle,
  freeFasFaSortDown,
  freeFasFaFlagUsa,
  freeFasFaSearch,
  freeFasFaCalculator,
  freeFasFaLongArrowAltDown,
  freeFasFaSyncAlt
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
