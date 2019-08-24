import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const Style = createGlobalStyle`
    body {
        margin: 0;
        background: linear-gradient(to right, #43cea2, #185a9d);
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    * {
        box-sizing: border-box;
    }
    main {
        padding: 2rem 1rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        border-bottom: 2px solid currentColor;
        &:hover {
            border-bottom: 2px solid #bbb;
        }
    }
`

const Header = styled.header`
	width: 100%;
	padding: 1rem;
	color: #fff;
	h1 {
		margin: 0;
		font-weight: 300;
	}
`

const Footer = styled.footer`
	width: 100%;
	padding: 1rem;
	text-align: center;
	font-size: 0.75rem;
`

interface IProps {
	children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<React.Fragment>
			<Style />
			<Header>
				<h1>Idea Board</h1>
			</Header>
			<main>{children}</main>
			<Footer>
				&copy; 2019 <a href="https://herper.io/">Jacob Herper</a>
			</Footer>
		</React.Fragment>
	)
}

export default Layout
