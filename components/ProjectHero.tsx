import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "STACK Projects",
    description: "Explore innovative solutions leveraging the STACK framework, focusing on modular architecture and scalable design.",
    link: "/",
  },
  {
    title: "RAG Projects",
    description: "Dive into projects utilizing Retrieval-Augmented Generation (RAG) techniques to enhance content generation and retrieval efficiency.",
    link: "/",
  },
  {
    title: "Prompt Engineering Projects",
    description: "Engage with projects dedicated to crafting effective prompts that optimize model performance across various applications.",
    link: "/",
  },
  {
    title: "Fine-Tuning Projects",
    description: "Examine fine-tuning methodologies for adapting pre-trained models to specific tasks, enhancing their accuracy and utility.",
    link: "/",
  },
  {
    title: "Computer Vision Projects",
    description: "Discover cutting-edge computer vision projects that harness deep learning techniques for image and video analysis.",
    link: "/",
  },
  {
    title: "Gradio Projects",
    description: "Check out interactive applications built with Gradio, showcasing user-friendly interfaces for machine learning models.",
    link: "/",
  },
];

const ProjectHero = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1>Project Hero</h1>
      <p>Your project description goes here.</p>
      <HoverEffect items={projects} />
    </div>
  );
};

export default ProjectHero;