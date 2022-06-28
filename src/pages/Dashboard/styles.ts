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
        gap: 8px;
        margin-top: calc(0px - 1.7rem);
        height: 3.4rem;
    }

    &__input {
     
    }
}
`;