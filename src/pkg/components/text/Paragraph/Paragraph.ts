import { UILeafComponent } from "../../../UIComponent.ts";
import styles from "./Paragraph.module.scss"

export default class Header extends UILeafComponent {
  props: {
    content: string,
    align?: "left" | "center" | "right"
  }
  renderedElement: HTMLHeadingElement | undefined

  constructor({ props, debugId = undefined }: { props: Header["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
    this.renderedElement = undefined
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("p")
    }

    super.render(this.renderedElement)

    this.renderedElement.classList.add(styles.component)

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

    this.renderedElement.innerText = this.props.content
  }
}
