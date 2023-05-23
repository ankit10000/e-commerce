import styled from "styled-components"

const ErrorPage = () => {
  return (
    <WRAPPER>
        <div className="error-page">
            <div className="error">404</div>
            <div>Page Not Found</div>
        </div>
    </WRAPPER>
  )
}
    const WRAPPER = styled.section`
        height: 850px;
        .error-page{
            text-align: center;
            font-size: larger;
            padding-top: 200px;
        }
        .error{
            font-size: 100px;
            color: red;
        }
    `;

export default ErrorPage