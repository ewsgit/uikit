import { UILeafComponent } from "../../../UIComponent.ts";
import styles from "./Card.module.scss"
import unit from "../../../helpers/unit.ts";
import { FlexContainer } from "../containerComponents.ts";

export default class Card extends UILeafComponent {
  props: {
    cover?: string,
    size: "small" | "medium" | "large" | "extraLarge",
    onClick?: () => void,
    borderless?: boolean,
    loading?: boolean,
    title?: string
  }
  renderedElement: HTMLDivElement | undefined

  contentComponent: FlexContainer

  constructor({ props, debugId = undefined }: { props: Card["props"], debugId?: string }) {
    super({ props, debugId })

    this.props = props
    this.renderedElement = undefined
    this.contentComponent = new FlexContainer({ props: { direction: "column" } })
    return this
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("div")
    }

    super.render(this.renderedElement)

    if (this.props.loading) {
      const skeleton = document.createElement("div")
      skeleton.classList.add(styles.skeleton)
      skeleton.style.width = "100%"
      skeleton.style.display = "flex"
      skeleton.style.flexDirection = "column"
      skeleton.style.gap = unit(1)
      this.renderedElement.appendChild(skeleton)

      const skeletonElementHeight = unit(4)

      const segment = document.createElement("div")
      const segmentWidth = `${Math.max(10, Math.floor(Math.random()  * 100))}%`
      segment.style.width = segmentWidth
      segment.style.height = skeletonElementHeight
      segment.style.borderRadius = unit(0.5)
      skeleton.appendChild(segment)

      const segment2 = document.createElement("div")
      const segment2Width = `${Math.max(10, Math.floor(Math.random()  * 100))}%`
      segment2.style.width = segment2Width
      segment2.style.height = skeletonElementHeight
      segment2.style.borderRadius = unit(0.5)
      skeleton.appendChild(segment2)

      const segment3 = document.createElement("div")
      const segment3Width = `${Math.max(10, Math.floor(Math.random()  * 100))}%`
      segment3.style.width = segment3Width
      segment3.style.height = skeletonElementHeight
      segment3.style.borderRadius = unit(0.5)
      skeleton.appendChild(segment3)
    }

    this.contentComponent.render()

    this.renderedElement.classList.add(styles.component)
  }

  setLoading(loading: boolean) {
    this.setState({ ...this.state, loading })
  }
}
