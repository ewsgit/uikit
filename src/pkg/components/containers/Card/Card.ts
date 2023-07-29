import { UILeafComponent } from "../../../UIComponent.ts";
import styles from "./Card.module.scss";
import unit from "../../../helpers/unit.ts";
import { FlexContainer } from "../containerComponents.ts";

export default class Card extends UILeafComponent {
  props: {
    cover?: string;
    size: "small" | "medium" | "large" | "extraLarge";
    onClick?: () => void;
    borderless?: boolean;
    loading?: boolean;
    headerTitle?: string;
  };
  renderedElement: HTMLDivElement | undefined;
  content: FlexContainer;

  constructor({
    props,
    debugId = undefined,
  }: {
    props: Card["props"];
    debugId?: string;
  }) {
    super({ props, debugId });

    this.props = props;
    this.renderedElement = undefined;
    this.content = new FlexContainer({ props: { direction: "column" } });
    return this;
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("div");
    }

    super.render(this.renderedElement);

    if (this.props.loading) {
      const skeleton = document.createElement("div");
      skeleton.classList.add(styles.skeleton);
      skeleton.style.width = "100%";
      skeleton.style.display = "flex";
      skeleton.style.flexDirection = "column";
      skeleton.style.gap = unit(1);
      this.renderedElement.appendChild(skeleton);

      const skeletonElementHeight = unit(4);

      const segment = document.createElement("div");
      segment.style.width = `${Math.max(10, Math.floor(Math.random() * 100))}%`;
      segment.style.height = skeletonElementHeight;
      segment.style.borderRadius = unit(0.5);
      skeleton.appendChild(segment);

      const segment2 = document.createElement("div");
      segment2.style.width = `${Math.max(
        10,
        Math.floor(Math.random() * 100),
      )}%`;
      segment2.style.height = skeletonElementHeight;
      segment2.style.borderRadius = unit(0.5);
      skeleton.appendChild(segment2);

      const segment3 = document.createElement("div");
      segment3.style.width = `${Math.max(
        10,
        Math.floor(Math.random() * 100),
      )}%`;
      segment3.style.height = skeletonElementHeight;
      segment3.style.borderRadius = unit(0.5);
      skeleton.appendChild(segment3);
    } else {
      this.content.render();
      // @ts-ignore
      this.renderedElement?.appendChild(this.content.renderedElement);
    }

    const header = document.createElement("div");
    this.renderedElement.appendChild(header);

    if (this.props.headerTitle) {
      const headerTitle = document.createElement("span");
      headerTitle.innerHTML = this.props.headerTitle;
      header.appendChild(headerTitle);
    }

    if (!this.renderedElement.classList.contains(styles.component)) {
      this.renderedElement.classList.add(styles.component);
    }

    if (!this.props.borderless) {
      this.renderedElement.classList.add(styles.border);
    }
  }

  setTitle(title: string) {
    this.props.headerTitle = title;
    this.render();
  }

  setLoading(loading: boolean) {
    this.setState({ ...this.state, loading });
  }
}

/*
 - things to do
 - header
 - title
 - extra
 - content
 - skeleton
 - content
 - footer
 - content
 - actions
 - content (mainly buttons)
 */
