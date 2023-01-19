import styled from 'styled-components';

export const Container = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;

        .reportIMG {
              width: 3.4rem;
              height: 3.4rem;   
              margin-top: 3rem;
          }
   
          .text {
              margin-top: 1rem;
              width: 100%;
              text-align: center;
              &__title {
                font-weight: bold;
              color: var(--gray300);
              font-size: 1rem;
            
              
              }
              &__p {
                font-weight: 400;
              color: var(--gray300);
              font-size: 1rem;
              text-align: center;
              width: 100%;
              margin-top: 0.475rem;
              }
          }
`;

