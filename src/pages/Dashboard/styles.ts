import styled from 'styled-components';

export const Container = styled.main`
width: 100%;
.header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    background: var(--gray700);
}

.main {
   
     max-width: 46rem;
     margin: 0 auto;



    &__aside {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 90px;
        gap: 0.6rem;
        margin-top: calc(0px - 1.7rem);
        height: 3.4rem;
        &__input {
            background: var(--gray500);
            border: 1px solid var(--700);
            border-radius: 8px;
            padding: 1rem;
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

          &__amount {
             background: var(--gray400);
             width: 25px;
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
          img {
              width: 3.4rem;
              height: 3.4rem;   
              margin-top: 3rem;
          }

 

   
          &__text {
              margin-top: 1rem;
            
              &__title {
                font-weight: bold;
              color: var(--gray300);
              font-size: 1rem;
              width: 100%;
              text-align: center;
              }
              &__p {
                font-weight: 400;
              color: var(--gray300);
              font-size: 1rem;
              text-align: center;
              width: 100%;
              }
          }
        }
  }


}
`;