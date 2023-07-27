// The base component for all of UIKit components.
export class UILeafComponent {
  state: object
  debugId: string | undefined
  props: object
  renderedElement: HTMLElement | undefined

  constructor({ props = {}, debugId = undefined }: { props: object, debugId?: string }) {
    this.props = props
    this.state = {}
    this.debugId = debugId

    console.debug("component_constructed_with_props: ", this)
  }

  render(element: HTMLElement | undefined = this.renderedElement) {
    console.debug("component_render: ", this)

    if (!element) {
      element = document.createElement('div')
      this.renderedElement = element
    }

    if (element !== this.renderedElement) {
      this.renderedElement = element
    }

    this.renderedElement.innerHTML = ""
  }

  // set a value in the component's state
  setState(state: object) {
    this.state = { ...this.state, ...state }
    this.render()
  }

  // set a css style property on the component's renderedElement
  setStyle(style: keyof CSSStyleDeclaration, value: string) {
    if (!this.renderedElement) {
      return
    }

    // @ts-ignore
    this.renderedElement.style[style] = value
  }
}

export default class UIComponent extends UILeafComponent {
  children: (UIComponent | UILeafComponent)[]

  constructor({ props = {}, debugId = undefined }: { props: object, debugId?: string }) {
    super({ props, debugId })
    this.children = []
    this.renderedElement = undefined
  }

  addChild(child: UIComponent | UILeafComponent) {
    this.children.push(child)

    if (child.renderedElement) {
      this.renderedElement?.appendChild(child.renderedElement)
    } else {
      child.render()
      // @ts-ignore
      this.renderedElement?.appendChild(child.renderedElement)
    }
  }

  removeChild(child: UIComponent) {
    this.children.splice(this.children.indexOf(child), 1)
  }
}
