import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/card';
import PageLayout from '../Components/PageLayout';

const LogoCreation = () => {
    const { id } = useParams();
    useEffect(() => {
        const element = document.getElementById("features");
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, [id]);
  const Content =  {
        mainTitle: "Logo Creation",
        cards: [
          {
            title: "Looka",
            copy: "Forget looking generic! Looka’s software is powered by AI to create a logo that matches your vision — no design skills required. Generate endless options, and tweak designs to get exactly what you want.Looka’s Brand Kit uses your logo, colors, and fonts to instantly create hundreds of branded marketing materials—all in one spot.",
            button: "Read more",
            imageId: "/new1.png",
            navigate: "/logoai",
          },
          {
            title: "Hatchful by Shopify",
            copy: "Hatchful is a logo maker built for entrepreneurs on the go. No design experience is required to create your own logo from scratch.Customize your free logo using hundreds of templates, icons, fonts, and color combinations in our design studio. ",
            button: "Read more",
            imageId: "new2.png",
            navigate: "/logomarker",
          },
          {
            title: "Design Hill Logo Maker",
            copy: "Browse our in-built logo template library for more ideas and inspiration. This AI tool features creative logo templates to help you out. You can check out these logo examples or customize them with desired icon, color, or element for strong brand identity.",
            button: "Read more",
            imageId: "new3.jpg",
            navigate: "/brandmarker",
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

export default LogoCreation
