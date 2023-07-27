import './style.css'
import VITE_LOGO from '/vite.svg'
import UIKit from "./pkg";
import { BasicButton, BoxContainer, Image, Paragraph } from "./pkg/components/components.ts";
import Heading from "./pkg/components/text/Heading/Heading.ts";
import Card from "./pkg/components/containers/Card/Card.ts";

document.querySelector<HTMLDivElement>('#application-container')!.innerHTML = `<div id="container"></div>`

const ui = new UIKit({ props: { containerElement: document.getElementById("container") as HTMLDivElement } })

const title = new Heading({ props: { label: "UI Kit", level: 1 } })

title.render()
ui.addChild(title)

const image = new Image({ props: { src: VITE_LOGO, alt: "Vite Logo" } })

image.render()
ui.addChild(image)

function headingTestFactory() {
  const headerContainer = new BoxContainer({ props: { direction: "column", align: { vertically: "center" } } })
  headerContainer.render()
  ui.addChild(headerContainer)

  const header1 = new Heading(
      {
        props: {
          label: "Header",
          level: 1,
          align: "center"
        }
      })
  header1.render()
  const header2 = new Heading(
      {
        props: {
          label: "Header",
          level: 2,
          align: "center"
        }
      })
  header2.render()
  const header3 = new Heading(
      {
        props: {
          label: "Header",
          level: 3,
          align: "center"
        }
      })
  header3.render()
  const header4 = new Heading(
      {
        props: {
          label: "Header",
          level: 4,
          align: "center"
        }
      })
  header4.render()
  const header5 = new Heading(
      {
        props: {
          label: "Header",
          level: 5,
          align: "center"
        }
      })
  header5.render()
  const header6 = new Heading(
      {
        props: {
          label: "Header",
          level: 6,
          align: "center"
        }
      })
  header6.render()

  const paragraph1 = new Paragraph(
      {
        props: {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
          align: "center"
        }
      })
  paragraph1.render()
  const paragraph2 = new Paragraph(
      {
        props: {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
          align: "center"
        }
      })
  paragraph2.render()
  const paragraph3 = new Paragraph(
      {
        props: {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
          align: "center"
        }
      })
  paragraph3.render()
  const paragraph4 = new Paragraph(
      {
        props: {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
          align: "center"
        }
      })
  paragraph4.render()
  const paragraph5 = new Paragraph(
      {
        props: {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
          align: "center"
        }
      })
  paragraph5.render()
  const paragraph6 = new Paragraph(
      {
        props: {
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque, debitis deserunt dicta eius est, ex fugiat laboriosam magnam maiores nam, odio placeat quidem saepe sint sit soluta sunt unde voluptas voluptates.",
          align: "center"
        }
      })
  paragraph6.render()

  headerContainer.addChild(header1)
  headerContainer.addChild(paragraph1)
  headerContainer.addChild(header2)
  headerContainer.addChild(paragraph2)
  headerContainer.addChild(header3)
  headerContainer.addChild(paragraph3)
  headerContainer.addChild(header4)
  headerContainer.addChild(paragraph4)
  headerContainer.addChild(header5)
  headerContainer.addChild(paragraph5)
  headerContainer.addChild(header6)
  headerContainer.addChild(paragraph6)
}

function buttonTestFactory() {
  const buttonContainer = new Card({ props: {  } })
  buttonContainer.render()
  ui.addChild(buttonContainer)
  const basicButtonLarge = new BasicButton({ props: { label: "Basic Button", size: "large" } })
  basicButtonLarge.render()
  buttonContainer.addChild(basicButtonLarge)
  const basicButtonMedium = new BasicButton({ props: { label: "Basic Button", size: "medium" } })
  basicButtonMedium.render()
  buttonContainer.addChild(basicButtonMedium)
  const basicButtonSmall = new BasicButton({ props: { label: "Basic Button", size: "small" } })
  basicButtonSmall.render()
  buttonContainer.addChild(basicButtonSmall)
}

headingTestFactory()
buttonTestFactory()
