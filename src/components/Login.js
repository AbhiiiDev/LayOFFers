import   {connect} from 'react-redux'; 
import styled from "styled-components";
<<<<<<< Updated upstream
import { signINAPI } from "../actions";
// export default Login;
=======
import "./Login.css";
>>>>>>> Stashed changes


const Login = (props) => {

<<<<<<< Updated upstream
=======
 
>>>>>>> Stashed changes
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/blackcrop.png" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
<<<<<<< Updated upstream
          <h1>Welcome to your own community</h1>
          {/* <img src="/images/crowd.png" alt="" /> */}
=======
          <div className="wrapper">
            <ul className="dynamic-text">
            <li><span>Got Fired </span></li>
            <li><span>Get Hired </span></li>
            <li><span>LayOFFers</span></li>
            </ul>

            
          </div>
          <img src="/images/crowd.png" alt="" />
>>>>>>> Stashed changes
        </Hero>
        <Form>
          <Google onClick={()=>props.signIn}>
            <img src="/images/google.png" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
<<<<<<< Updated upstream

`;
=======
  background-color:black
  `;
>>>>>>> Stashed changes

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
img{
    width:280px;
    height:80px;
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color:white;
  margin-right: 12px;
  &:hover {
    background-color :black;
    color:rgba(253,206,0,255);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px black;
  color: black;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: white;
  &:hover {
    background-color :rgba(253,206,0,255);
    color:black;
    text-decoration: none;

  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    margin: 40px 100px;
    width: 92%;
    font-size: 56px;
    color:#8f5849;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 600px;
    height: 570px;
    position: absolute;
    bottom: 90px;
    right: -50px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  margin-left: 300px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  border: solid 5px;

  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  /* box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0); */

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color:rgba(253,206,0,255);
    color :black;
  }
`;
const mapStateToProps = (state)=>{
  return {};
};
const mapDispatchToProps=(dispatch)=>({
signIn:()=>dispatch(signINAPI()),
});   



<<<<<<< Updated upstream
  
export default connect(mapStateToProps,mapDispatchToProps)(Login); 
=======



export default Login;
>>>>>>> Stashed changes
