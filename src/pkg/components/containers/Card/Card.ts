import { UILeafComponent } from "../../../UIComponent.ts";
import styles from "./Card.module.scss";
import unit from "../../../helpers/unit.ts";
import { FlexContainer } from "../containerComponents.ts";

export default class Card extends UILeafComponent {
  props: {
    slots: {
      headerExtra?: UILeafComponent | undefined;
      content: FlexContainer;
      footer?: UILeafComponent | undefined;
    };
    title?: string | undefined;
    size?: "small" | "medium" | "large" | "extraLarge";
    loading?: boolean;
    borderless?: boolean;
  };
  renderedElement: HTMLDivElement | undefined;
  header: {
    element: HTMLDivElement | undefined;
    titleElement: HTMLSpanElement | undefined;
    extraElement: HTMLDivElement | undefined;
  };

  constructor(props: Omit<Card["props"], "slots">) {
    super({ props, debugId: "Card" });

    this.props = { ...props, slots: { content: new FlexContainer({}) } };
    this.renderedElement = undefined;

    this.props.slots.content = new FlexContainer({
      direction: "column",
    });
    this.header = {
      element: undefined,
      titleElement: undefined,
      extraElement: undefined,
    };
    return this;
  }

  render() {
    if (!this.renderedElement) {
      this.renderedElement = document.createElement("div");
      this.renderedElement.classList.add(styles.component);
    }

    if (this.props.borderless) {
      this.renderedElement.classList.remove(styles.border);
    } else {
      this.renderedElement.classList.add(styles.border);
    }

    super.render(this.renderedElement);

    this.renderedElement.setAttribute("size", this.props.size || "medium");

    if (this.props?.title || this.props.slots?.headerExtra) {
      this.createHeaderElement();
    }

    if (this.props.loading) {
      this.addLoadingSkeleton();
      return;
    }

    if (this.props.slots?.content) {
      if (!this.props.slots.content.renderedElement) {
        this.props.slots.content.render();
        // @ts-ignore
        this.props.slots.content.renderedElement?.classList.add(styles.content);
        this.renderedElement.appendChild(
          // @ts-ignore
          this.props.slots.content.renderedElement,
        );

        if (this.props?.title || this.props.slots?.headerExtra) {
          // @ts-ignore
          this.props.slots.content.renderedElement?.setAttribute(
            "header",
            "true",
          );
        }
      } else {
        this.props.slots.content.render();
      }
    }
  }

  setTitle(title: string) {
    this.props.title = title;
    this.render();
  }

  setLoading(loading: boolean) {
    this.props.loading = loading;
    this.render();
  }

  private createHeaderElement() {
    if (!this.header.element) {
      this.header.element = document.createElement("div");
      this.header.element.classList.add(styles.header);
      this.renderedElement?.appendChild(this.header.element);
    }

    if (!this.header.titleElement) {
      this.header.titleElement = document.createElement("span");
      this.header.titleElement.classList.add(styles.title);
      this.header.element.appendChild(this.header.titleElement);
    }

    this.header.titleElement.textContent = this.props.title || "";
  }

  private addLoadingSkeleton() {
    const skeleton = document.createElement("div");
    skeleton.classList.add(styles.skeleton);
    skeleton.style.width = "100%";
    skeleton.style.display = "flex";
    skeleton.style.flexDirection = "column";
    skeleton.style.gap = unit(1);
    this.renderedElement?.appendChild(skeleton);

    const skeletonElementHeight = unit(4);

    const segment = document.createElement("div");
    segment.style.width = `${Math.max(10, Math.floor(Math.random() * 100))}%`;
    segment.style.height = skeletonElementHeight;
    segment.style.borderRadius = unit(0.5);
    skeleton.appendChild(segment);

    const segment2 = document.createElement("div");
    segment2.style.width = `${Math.max(10, Math.floor(Math.random() * 100))}%`;
    segment2.style.height = skeletonElementHeight;
    segment2.style.borderRadius = unit(0.5);
    skeleton.appendChild(segment2);

    const segment3 = document.createElement("div");
    segment3.style.width = `${Math.max(10, Math.floor(Math.random() * 100))}%`;
    segment3.style.height = skeletonElementHeight;
    segment3.style.borderRadius = unit(0.5);
    skeleton.appendChild(segment3);
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
