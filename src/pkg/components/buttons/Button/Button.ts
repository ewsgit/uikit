import UIComponent from "../../../UIComponent.ts";
import styles from "./Button.module.scss";

export default class Button extends UIComponent {
  props: {
    label: string,
    size: "small" | "medium" | "large",
  }

  constructor({ props, debugId = undefined }: { props: Button["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
  }

  render() {
    super.render( document.createElement("button") )

    this.renderedElement?.classList.add(styles.button)

    switch( this.props.size ) {
      case "small":
        this.renderedElement?.classList.add(styles.sizeSmall)
        break
      case "medium":
        this.renderedElement?.classList.add(styles.sizeMedium)
        break
      case "large":
        this.renderedElement?.classList.add(styles.sizeLarge)
        break
      default:
        break
    }

    this.renderedElement?.appendChild(document.createTextNode(this.props.label))
  }
}
