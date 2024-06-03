import styled from 'styled-components'

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  transition: width .25s ease, padding .25s ease;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  @media (min-width: 600px) {
    padding: 20px;
    width: 1000px;
  }
  @media (min-width: 1280px) {
    padding: 20px;
    width: 1100px;
  }
`

export const TosWrapper = styled.div`
  position: relative;
  &:after {
    content: " ";
    background: linear-gradient(180deg, transparent, #15151f);
    height: 50px;
    pointer-events: none;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`

export const TosInner = styled.div`
  max-height: 400px;
  padding: 10px;
  overflow: auto;
  position: relative;
`
* {
box-sizing: border-box;
}

:root {
--background-color: #0b0b0e;
--text-color: #ffffff;
--gamba-ui-primary-color: #9564ff;

--gamba-ui-border-radius: 10px;

--gamba-ui-button-default-background: #0e0e16;
--gamba-ui-button-default-background-hover: #11111d;
--gamba-ui-button-default-color: white;

--gamba-ui-button-main-background: #8851ff;
--gamba-ui-button-main-color: white;
--gamba-ui-button-main-background-hover: #9564ff;

--gamba-ui-input-background: #0e0e16;
--gamba-ui-input-color: #ffffff;
--gamba-ui-input-background-hover: #11111d;
}

body, input, button, textarea, pre {
font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
font-size: 16px;
}

h1, h2 {
margin: 0;
}

body {
background: var(--background-color);
color: var(--text-color);
cursor: default;
margin: 0;
overflow-y: scroll;
overflow-x: hidden;
-webkit-tap-highlight-color: transparent;
}

a {
color: inherit;
text-decoration: none;
}

body::-webkit-scrollbar {
width: 4px;
}

body::-webkit-scrollbar-thumb {
background-color: var(--gamba-ui-primary-color);
}

.wallet-adapter-button.wallet-adapter-button-trigger {
height: 40px;
line-height: 40px;
font-weight: normal;
background: rgb(55, 57, 82);
border-radius: 10px;
}

body {
overflow-y: scroll;
overflow-x: hidden;
margin: 0;
padding: 0;
}

#wrapper {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
}

#test {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
}

#top-layer {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: transparent;
z-index: 1;
}