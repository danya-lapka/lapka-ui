import type { App, Component } from 'vue'

import './style.scss'

import ButtonBase from './components/ButtonBase.vue'
import LinkBase from './components/LinkBase.vue'
import TooltipBase from './components/TooltipBase.vue'
import InputText from './components/InputText.vue'
import LinkRouter from './components/LinkRouter.vue'
import SvgIcon from './components/SvgIcon.vue'

export { ButtonBase, LinkBase, LinkRouter, TooltipBase, InputText, SvgIcon }

const components = {
  ButtonBase,
  LinkBase,
  LinkRouter,
  TooltipBase,
  InputText,
  SvgIcon
}

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component as Component)
    })
  }
}
