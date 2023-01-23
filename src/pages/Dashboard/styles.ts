import styled, { css } from 'styled-components';

type checkParams = {
    checked?: boolean;
}

export const Radio = styled.div<checkParams>`
    border: 2px solid var(--blue);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    align-self: flex-start;
 
    ${({ checked }) => checked && css`
        background: var(--purple-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    `}
`

export const Container = styled.main`
width: 100%;



.main {
    @media (max-width: 750px) {
           padding: 20px
        }
     max-width: 46rem;
     margin: 0 auto;

    &__aside {
      
      form {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 90px;
        gap: 0.6rem;
        margin-top: calc(0px - 1.7rem);
        height: 3.4rem;
        @media (max-width: 400px) {
            display: flex;
            flex-direction: column
        }
        }
        &__input {
            background: var(--gray500);
            border: 1px solid var(--700);
            border-radius: 8px;
            padding: 1rem;
            color: var(--gray100);
            :focus{
                outline: transparent;
           
          }

          :hover {
            border: 1px solid var(--purple-dark);
                transition: .3s;
            }
    }
   
    &__button{
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--blue-dark);
        border-radius: 8px;
        padding: 1rem;
        border: none;
        column-gap: 0.5rem;
        cursor: pointer;
        :hover {
                filter: brightness(0.8);
                transition: .3s;
            }
    :disabled {
      cursor: not-allowed;
      opacity: .8;
    }

    }
    &__h4 {
        color: var(--gray100);
        font-size: 0.8rem;
        font-weight: bold;
    }
    img {
        width: 1rem;
        height: 1rem;
    }
    }

  
  .main {
   
      &__container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 4.2rem;

      }

      &__tasks {
          display: flex;
          align-items: center;
          column-gap: .6rem;

        
          &__text {
              color: var(--blue);
              font-size: 0.8rem;
              font-weight: bold;
          }

          &__text_checked {
              color: var(--purple);
              font-size: 0.8rem;
              font-weight: bold;
          }

          &__amount {
             background: var(--gray400);
   
             height: 19px;
             display: flex;
             align-items: center;
             justify-content: center;
             padding: 2px 8px;
             gap: 10px;
             border-radius: 999px;
          

             span {
                 color: var(--gray200);
                 font-size: .6rem;
                 font-weight: bold;
             }
          }
      }

      &__list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--gray400);
          align-items: center;
          margin-top: 1rem;
          width: 100%;
          row-gap: 1rem;
          max-height: 250px;
          overflow-y: scroll;
          padding: 10px;
          ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--blue); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--blue-dark); 
}
          &__card {
              display: flex;
              background: var(--gray400) !important;
              width: 100%;
              border-radius: 8px;

              padding: 16px;
              column-gap: 1rem;
              justify-content: space-between;
           

              &__description {
                  display: flex;
                  column-gap: 1rem;
                  cursor: pointer;
              }      
        
              &__text{
                  color: var(--gray100);
                  font-size: 0.8rem;
                  font-weight: 400;
                  max-width: 632px;
     
                }
       
              &__trash {
                cursor: pointer;
                  img {
                  
                      width: 0.8rem;
                      width: 0.8rem;
                  }
              }
           
          }
        }
  }


}
`;

export const Paragraph = styled.p<checkParams>`
 color: var(--gray100);
 font-size: 0.8rem;
 font-weight: 400;
 max-width: 632px;

 ${({ checked }) => checked && css`
        text-decoration: line-through;
        color: var(--gray300);
    `}
`