<script>
import { h } from 'vue'
import CanvasParticle from './components/CanvasParticle.vue'

const NotFoundComponent = { template: '<p>Page not found</p>' }

const routes = {
  '/': {
    component: CanvasParticle,
    meta: '',
  },
  '/mesh': {
    component: CanvasParticle,
    meta: 'mesh'
  }
}

export default {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute].component || NotFoundComponent
    },
    CurrentMeta() {
      return routes[this.currentRoute].meta
    }
  },

  render() {
    return h(this.CurrentComponent, { meta: this.CurrentMeta })
  }
}
</script>
