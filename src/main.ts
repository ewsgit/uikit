import "./style.css";
import VITE_LOGO from "/vite.svg";
import UIKit from "./pkg";
import {
  BoxContainer,
  Button,
  FlexContainer,
  Image,
  Paragraph,
} from "./pkg/components/components.ts";
import Heading from "./pkg/components/text/Heading/Heading.ts";
import Card from "./pkg/components/containers/Card/Card.ts";
import unit from "./pkg/helpers/unit.ts";

document.querySelector<HTMLDivElement>(
  "#application-container",
)!.innerHTML = `<div id="container"></div>`;

const ui = new UIKit({
  props: {
    containerElement: document.getElementById("container") as HTMLDivElement,
  },
});

const navigation = new BoxContainer({
  props: {
    align: { vertically: "center", horizontally: "center" },
    direction: "row",
    gap: 2,
  },
});
ui.addChild(navigation);

navigation.setStyle("marginBottom", unit(2));

const image = new Image({ props: { src: VITE_LOGO, alt: "Vite Logo" } });
navigation.addChild(image);

const title = new Heading({ props: { label: "UI Kit", level: 1 } });
navigation.addChild(title);

function headingTestFactory() {
  const headerContainer = new BoxContainer({
    props: { direction: "column", align: { vertically: "center" } },
  });
  ui.addChild(headerContainer);

  const header1 = new Heading({
    props: {
      label: "Header",
      level: 1,
      align: "center",
    },
  });
  const header2 = new Heading({
    props: {
      label: "Header",
      level: 2,
      align: "center",
    },
  });
  const header3 = new Heading({
    props: {
      label: "Header",
      level: 3,
      align: "center",
    },
  });
  const header4 = new Heading({
    props: {
      label: "Header",
      level: 4,
      align: "center",
    },
  });
  const header5 = new Heading({
    props: {
      label: "Header",
      level: 5,
      align: "center",
    },
  });
  const header6 = new Heading({
    props: {
      label: "Header",
      level: 6,
      align: "center",
    },
  });
  const paragraph1 = new Paragraph({
    props: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
      align: "center",
    },
  });
  const paragraph2 = new Paragraph({
    props: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
      align: "center",
    },
  });
  const paragraph3 = new Paragraph({
    props: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
      align: "center",
    },
  });
  const paragraph4 = new Paragraph({
    props: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
      align: "center",
    },
  });
  const paragraph5 = new Paragraph({
    props: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
      align: "center",
    },
  });
  const paragraph6 = new Paragraph({
    props: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
      align: "center",
    },
  });
  headerContainer.addChild(header1);
  headerContainer.addChild(paragraph1);
  headerContainer.addChild(header2);
  headerContainer.addChild(paragraph2);
  headerContainer.addChild(header3);
  headerContainer.addChild(paragraph3);
  headerContainer.addChild(header4);
  headerContainer.addChild(paragraph4);
  headerContainer.addChild(header5);
  headerContainer.addChild(paragraph5);
  headerContainer.addChild(header6);
  headerContainer.addChild(paragraph6);
}

function buttonTestFactory() {
  const buttonContainer = new Card({ size: "medium" });
  ui.addChild(buttonContainer);

  buttonContainer.setTitle("Basic Button");
  buttonContainer.setStyle("marginTop", unit(2));

  const basicButtonLarge = new Button({
    props: { label: "Basic Button", size: "large" },
  });
  buttonContainer.props.slots?.content?.addChild(basicButtonLarge);

  const basicButtonMedium = new Button({
    props: { label: "Basic Button", size: "medium" },
  });
  buttonContainer.props.slots?.content?.addChild(basicButtonMedium);

  const basicButtonSmall = new Button({
    props: { label: "Basic Button", size: "small" },
  });
  buttonContainer.props.slots?.content?.addChild(basicButtonSmall);
}

function skeletonTestFactory() {
  const skeletonContainer = new Card({
    size: "medium",
    loading: true,
  });
  ui.addChild(skeletonContainer);
  skeletonContainer.setStyle("marginTop", unit(2));
}

function cardTestFactory() {
  const cardContainer = new FlexContainer({
    gap: 4,
    align: { vertically: "center", horizontally: "center" },
    direction: "column",
  });
  ui.addChild(cardContainer);
  cardContainer.setStyle("marginTop", unit(2));

  function smallCard() {
    const card = new Card({ size: "small", title: "Card" });
    cardContainer.addChild(card);

    const innerCard = new Card({
      size: "small",
      title: "Card",
    });
    card.props.slots?.content?.addChild(innerCard);
  }
  smallCard();

  function mediumCard() {
    const card = new Card({ size: "medium", title: "Card" });
    cardContainer.addChild(card);

    const innerCard = new Card({
      size: "medium",
      title: "Card",
    });
    card.props.slots?.content?.addChild(innerCard);
  }
  mediumCard();

  function largeCard() {
    const card = new Card({ size: "large", title: "Card" });
    cardContainer.addChild(card);

    const innerCard = new Card({ size: "large", title: "Card" });
    card.props.slots.content.addChild(innerCard);
    innerCard.props.slots?.content?.addChild(
      new Button({ props: { label: "Large Card Content", size: "large" } }),
    );
    console.log(JSON.parse(JSON.stringify(innerCard)));
  }
  largeCard();

  function extraLargeCard() {
    const card = new Card({ size: "extraLarge", title: "Card" });
    cardContainer.addChild(card);

    const innerCard = new Card({
      size: "extraLarge",
      title: "Card",
    });
    card.props.slots?.content?.addChild(innerCard);
  }
  extraLargeCard();
}

headingTestFactory();
buttonTestFactory();
skeletonTestFactory();
cardTestFactory();
