import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/card';
import PageLayout from '../Components/PageLayout';

const ImageEditing = () => {
    const { id } = useParams();
    useEffect(() => {
        const element = document.getElementById("features");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, [id]);
  const Content =  {
    mainTitle: "Image Editing",
    cards: [
      {
        title: "Fotor",
        copy: "You don't have to manually adjust various settings and parameters in complex software to edit photos. This AI-powered automatic photo editor streamlines the whole editing process. ",
        button: "Read more",
        imageId: "fotor1.jpg",
        navigate: "/fotor",
      },
      {
        title: "Phot.AI",
        copy: "Transform your photos with Photo AI's Advanced AI Background Editor. Experience the seamless removal of backgrounds with precision. You can add solid color backgrounds for your product shots or create stunniung landscapes with custom AI Backgrounds. ",
        button: "Read more",
        imageId: "phot.ai3.jpg",
        navigate: "/photAI",
      },
      {
        title: "Light X Editor",
        copy: "Embark on a journey of limitless creativity with LightX's groundbreaking AI tools. LightX’s Image to Image AI model seamlessly enhances every detail of your photos, transforming ordinary photos into extraordinary masterpieces.",
        button: "Read more",
        imageId: "4.jpg",
        navigate: "/lightXeditor",
      },
    ],
  };
      return(
      <PageLayout>
        <div id={"features"} className='py-10'>
      {Content.cards.map((card, index) => {
          console.log(index);
          return (
              <Card
              ind={index}
              title={card.title}
              copy={card.copy}
              button={card.button}
              imageId={card.imageId}
              link={card.navigate}
              />
            );
        })
    }
    </div>
    </PageLayout>
    );
}

export default ImageEditing
