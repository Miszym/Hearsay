import React from 'react';
import styled from 'styled-components';
import { getTimestampFromUTF } from '../../../utils/timeFunctions';

const StyledContent = styled.div`
   margin: 0 1rem;
   max-width: 52rem;
   font-family: ${(props) => props.theme.fonts.fontText};
   color: ${(props) => props.theme.colors.colorText};
   h2 {
      font-size: 2rem;
      margin: 1rem 0;
   }
   h4 {
      span {
         float: right;
      }
   }
   p {
      font-size: 1.2rem;
   }
   @media (max-width: 768px) {
      h2 {
         font-size: 1.4rem;
         margin: 0.4rem 0;
      }
      p {
         font-size: 0.9rem;
      }
   }
`;

const ArticleContent = ({ article }) => {
   return (
      <StyledContent>
         <h4>
            {getTimestampFromUTF(article.publishedAt)}
            <span>{article.author}</span>
         </h4>
         <h2>{article.title}</h2>
         <p>
            {article.description
               ? article.description
               : article.content.split('[+')[0]}
         </p>
      </StyledContent>
   );
};

export default ArticleContent;
