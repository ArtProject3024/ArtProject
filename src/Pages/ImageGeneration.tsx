import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/card';
import PageLayout from '../Components/PageLayout';

const ImageGeneration = () => {
    const { id } = useParams();
    useEffect(() => {
        const element = document.getElementById("features");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, [id]);
  const Content =  {
    mainTitle: "Image Generation",
    cards: [
      {
        title: "Adobe firefly",
        copy: "Create stunning images with the latest generative AI features, powered by the new Adobe Firefly Image 3 Model (preview), now in the Photoshop (beta) app. Add, remove, and expand content, create lifelike images from scratch, and more",
        button: "Read more",
        imageId: "adobefinal.jpg",
        navigate: "/adobe",
      },
      {
        title: "Gemini",
        copy: "Gemini AI is an innovative platform that leverages artificial intelligence (AI) to generate high-quality images. With Gemini AI, users can effortlessly create stunning visuals for various purposes, ranging from social media posts to marketing materials",
        button: "Read more",
        imageId: "geminioutput.jpeg",
        navigate: "/gemini",
      },
      {
        title: "Microsoft copilot designer",
        copy: "Microsoft Copilot Designer empowers developers to create visually appealing and user-friendly applications by offering AI-driven design assistance directly within their designing environment",
        button: "Read more",
        imageId: "copilotfinal.png",
        navigate: "/copiolet-designer",
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

export default ImageGeneration
