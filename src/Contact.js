import styled, { css } from "styled-components";

const LinkButton = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-decoration: none;
`;

const Contact = () => {
  return (
    <div>
      <LinkButton href="https://github.com/justin-henley" target="_blank">
        <i class="fab fa-github-square"></i> Github
      </LinkButton>
      <LinkButton
        href="https://linkedin.com/in/justin-henley-796521aa"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i> LinkedIn
      </LinkButton>
      <LinkButton href="" target="_blank">
        <i class="fab fa-twitter-square"></i> Twitter
      </LinkButton>
      <LinkButton href="" target="_blank">
        <i class="fas fa-envelope"></i> E-mail
      </LinkButton>
    </div>
  );
};

export default Contact;
