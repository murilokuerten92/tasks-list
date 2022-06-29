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
     padding: 0 1rem;


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

  


}
`;