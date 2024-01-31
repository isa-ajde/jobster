import styled from 'styled-components'

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  /* .backgroundPage {
    height: 89vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
  } */
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
    /* .backgroundPage {
      height: 89vh;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
    } */
  }
`
export default Wrapper
