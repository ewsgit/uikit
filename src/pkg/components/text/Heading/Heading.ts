import UIComponent from "../../../UIComponent.ts";
import styles from "./Heading.module.scss"

export default class Heading extends UIComponent {
  props: {
    label: string,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    align?: "left" | "center" | "right"
  }
  renderedElement: HTMLHeadingElement | undefined

  constructor({ props, debugId = undefined }: { props: Heading["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
    this.renderedElement = undefined
  }

  render() {
    if (!this.renderedElement) {
      switch (this.props.level) {
        case 1:
          this.renderedElement = document.createElement("h1")
          break
        case 2:
          this.renderedElement = document.createElement("h2")
          break
        case 3:
          this.renderedElement = document.createElement("h3")
          break
        case 4:
          this.renderedElement = document.createElement("h4")
          break
        case 5:
          this.renderedElement = document.createElement("h5")
          break
        case 6:
          this.renderedElement = document.createElement("h6")
          break
        default:
          this.renderedElement = document.createElement("h1")
          break
      }
    }

    super.render(this.renderedElement)

    switch (this.props.level) {
      case 1:
        this.renderedElement.classList.add(styles.h1)
        break
      case 2:
        this.renderedElement.classList.add(styles.h2)
        break
      case 3:
        this.renderedElement.classList.add(styles.h3)
        break
      case 4:
        this.renderedElement.classList.add(styles.h4)
        break
      case 5:
        this.renderedElement.classList.add(styles.h5)
        break
      case 6:
        this.renderedElement.classList.add(styles.h6)
        break
      default:
        this.renderedElement.classList.add(styles.h1)
        break
    }

    switch (this.props.align) {
      case "left":
        this.renderedElement.classList.add(styles.alignLeft)
        break
      case "center":
        this.renderedElement.classList.add(styles.alignCenter)
        break
      case "right":
        this.renderedElement.classList.add(styles.alignRight)
        break
    }

    this.renderedElement.classList.add(styles.component)

    this.renderedElement.innerText = this.props.label
  }
}
