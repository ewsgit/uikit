import UIComponent from "../../../UIComponent.ts";
import styles from "./Box.module.scss"

export default class Box extends UIComponent {
  props: {
    direction?: "row" | "column",
    align?: {
      vertically?: "top" | "center" | "bottom",
      horizontally?: "left" | "center" | "right",
    },
    gap?: number
  }
  renderedElement: HTMLHeadingElement | undefined

  constructor({ props, debugId = undefined }: { props: Box["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
    this.renderedElement = undefined
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("div")
    }

    super.render(this.renderedElement)

    switch (this.props.direction) {
      case "row":
        this.renderedElement.classList.add(styles.row)
        break
      case "column":
        this.renderedElement.classList.add(styles.column)
        break
      default:
        this.renderedElement.classList.add(styles.column)
        break
    }

    switch (this.props.align?.vertically) {
      case "top":
        this.renderedElement.classList.add(styles.alignTop)
        break
      case "center":
        this.renderedElement.classList.add(styles.alignCenter)
        break
      case "bottom":
        this.renderedElement.classList.add(styles.alignBottom)
        break
      default:
        this.renderedElement.classList.add(styles.alignTop)
    }

    switch (this.props.align?.horizontally) {
      case "left":
        this.renderedElement.classList.add(styles.alignLeft)
        break
      case "center":
        this.renderedElement.classList.add(styles.alignCenter)
        break
      case "right":
        this.renderedElement.classList.add(styles.alignRight)
        break
      default:
        this.renderedElement.classList.add(styles.alignLeft)
        break
    }

    this.renderedElement.classList.add(styles.component)
  }
}
