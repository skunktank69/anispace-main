"use client";

import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Slow rotating ring behind the 404
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 3rem 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, ##2f2f39, #272731, #0e0e14);
  color: #e6e6e6;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Number = styled.h1`
  font-size: 9rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin: 0;
  z-index: 2;
  animation: ${fadeIn} 0.7s ease-out forwards;
  text-shadow:
    0 0 40px rgba(255, 255, 255, 0.12),
    0 0 80px rgba(255, 255, 255, 0.05);

  @media (max-width: 600px) {
    font-size: 6rem;
  }
`;

const Ring = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;

  /*border: 2px solid rgba(255, 255, 255, 0.06);*/
  /*top: 50%;
  left: 50%;*/
  /*transform: translate(-5%, -5%);*/
  z-index: 1;
  backdrop-filter: blur(4px);
  animation: ${rotate} 18s linear infinite;
  /*border-top: 10px solid ;*/

  @media (max-width: 600px) {
    width: 290px;
    height: 290px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 500px;
  margin-top: 1rem;
  opacity: 0;
  animation: ${fadeIn} 0.9s ease-out forwards;
  animation-delay: 0.2s;
`;

const HomeButton = styled.a`
  margin-top: 2.8rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;
  text-decoration: none;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-3px);
  }
`;

export default function NotFound() {
  //@ts-expect-error lol
  useEffect(() => {
    const prev = document.title;
    document.title = "404 | Page Not Found";
    return () => (document.title = prev);
  }, []);

  return (
    <Wrapper>
      <Ring className="border-t-2 border-foreground" />
      <div className="z-999">
        <Subtitle>
          <code className="">
            <a className="text-md">
              The page you&rsquo;re looking for doesn’t exist anymore{" "}
            </a>
            <i className="font-extralight text-sm">or never did</i>.{" "}
            <b className="font-black">or did it</b>🤨
          </code>
        </Subtitle>
      </div>
      <Number>404</Number>

      {/*<Ring className="border-t-2 border-foreground" />*/}

      <HomeButton href="/">Return Home</HomeButton>
    </Wrapper>
  );
}

// export default NotFound;
