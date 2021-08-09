import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const ElectronicsProjectsPage = ({ data }) => {
  const { contentYaml } = data;
  const { title, projects } = contentYaml;
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {projects.map(({ name, description, github, images }) => (
          <li key={name}>
            
            <h2>{name}</h2>
            <a href={github}>Source on Github</a>
            <p>{description}</p>
            {images.map(({ file, alt }) => (
              <GatsbyImage key={file.reletivePath} image={getImage(file)} alt={alt} />
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export const query = graphql`
  query {
    contentYaml {
      title
      projects {
        name
        description
        github
        images {
          alt
          file {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`;

export default ElectronicsProjectsPage;
