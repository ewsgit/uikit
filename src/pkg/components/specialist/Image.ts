import UIComponent from "../../UIComponent.ts";

export default class Image extends UIComponent {
  props: {
    src: string,
    alt?: string
  }
  renderedElement: HTMLImageElement | undefined

  constructor({ props, debugId = undefined }: { props: Image["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
    this.renderedElement = undefined
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("img")
    }

    super.render( this.renderedElement )

    this.renderedElement.src = this.props.src
    this.renderedElement.alt = this.props.alt || ""
  }
}
