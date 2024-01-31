import React from 'react';

export default function Project({ projectData }) {
  const { title, content, github, pictures, imgAlt } = projectData;

  return (
    <>
    <article className="Project">
      <h1 className='TitleProject'>{title}</h1>
      <a href={github} className="ProjectWrapper" target="_blank" rel="noopener noreferrer">
        {pictures.map((picture, picIndex) => (
          <img
            className="ProjectImg"
            key={picIndex}
            src={picture}
            alt={`${imgAlt} - Image ${picIndex + 1}`}
          />
        ))}
      </a>
      <p className="description">{content}</p>
    </article>
    </>
  );
}
