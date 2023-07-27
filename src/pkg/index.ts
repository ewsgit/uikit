/**
 * # UIKit - a vanilla JS UI library
 * https://github.com/ewsgit/uikit
 */

import UIComponent from "./UIComponent.ts";
import "./main.css";

// @ts-ignore
window.__uikit = {}

/* @ts-ignore Returns an array of all currently-loaded UIKit components ( for debugging purposes ) */
window.__uikit.dumpComponents = function () {
  console.warn("UNIMPLEMENTED FUNCTION!")
}

export default class UIKit extends UIComponent {
  components: UIComponent[]
  renderedElement: HTMLDivElement | HTMLBodyElement | undefined

  constructor({props: { containerElement }}: { props: { containerElement: HTMLDivElement | HTMLBodyElement } }) {
    super({ props: {}, debugId: "uikit-root-component" })
    this.components = []
    this.renderedElement = containerElement

    return this
  }

  clear() {
    this.components = []
  }
}
