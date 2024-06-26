import { BeanRenderBase, Local } from '@cabloy/front';
import type { ControllerPageHome } from './controller.js';

export interface RenderPageHome extends ControllerPageHome {}

@Local()
export class RenderPageHome extends BeanRenderBase {
  render() {
    return (
      <div class="text-center">
        <div>
          <div style="font-size: 5vh">Hello CabloyJS</div>

          <div class="text-h5" style="opacity:.4">
            Less is more, while more is less
          </div>
        </div>
      </div>
    );
  }
}
