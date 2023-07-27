import { UILeafComponent } from "../../../UIComponent.ts";
import styles from "./Card.module.scss"

export default class Card extends UILeafComponent {
  props: {
    cover?: string,
    size: "small" | "medium" | "large" | "extraLarge",
    onClick?: () => void,
    borderless?: boolean,
    loading?: boolean,
    title?: string
  }
  renderedElement: HTMLHeadingElement | undefined

  constructor({ props, debugId = undefined }: { props: Card["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
    this.renderedElement = undefined
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("div")
    }

    super.render(this.renderedElement)

    this.renderedElement.classList.add(styles.component)
  }
}
