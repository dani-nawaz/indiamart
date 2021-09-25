import React from 'react'
import styled from 'styled-components'
import { cat, quickLinks, socialLinks } from '../../data'
const Wrapper = styled.section`
  background-color: #073c56;
  width: 100%;
  height: 100%;
  .site-footer {
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #fffffe;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem;
  }
  /* .container {
    display: flex;
  } */
  .site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5;
  }
  .site-footer hr.small {
    margin: 20px 0;
  }
  .site-footer h6 {
    color: #000000;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }
  .site-footer a {
    color: #000000;
  }
  .site-footer a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .footer-links {
    padding-left: 0;
    list-style: none;
  }
  .footer-links li {
    display: block;
  }
  .footer-links a {
    color: #737373;
  }
  .footer-links a:active,
  .footer-links a:focus,
  .footer-links a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .footer-links.inline li {
    display: inline-block;
  }
  .site-footer .social-icons {
    text-align: right;
  }
  .site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
  }
  .copyright-text {
    margin: 0;
  }
  @media (max-width: 991px) {
    .site-footer [class^='col-'] {
      margin-bottom: 30px;
    }
    .row {
      flex-direction: column;
    }
  }
  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .site-footer .copyright-text,
    .site-footer .social-icons {
      text-align: center;
    }
  }
  .social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .social-icons li {
    display: inline-block;
    margin-bottom: 4px;
  }
  .social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px;
  }
  .social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  .social-icons a:active,
  .social-icons a:focus,
  .social-icons a:hover {
    color: #fff;
    background-color: #29aafe;
  }
  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
  .social-icons a.facebook:hover {
    background-color: #3b5998;
  }
  .social-icons a.twitter:hover {
    background-color: #00aced;
  }
  .social-icons a.linkedin:hover {
    background-color: #007bb6;
  }
  .social-icons a.dribbble:hover {
    background-color: #ea4c89;
  }
  @media (max-width: 767px) {
    .social-icons li.title {
      display: block;
      margin-right: 0;
      font-weight: 600;
    }
  }
`
const Footer = () => {
  return (
    <Wrapper>
      <footer className='site-footer'>
        <div className='section__center'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <h6>About</h6>
                <p className='text-justify'>
                  IndiaMART InterMESH Ltd. is an Indian e-commerce company that
                  provides B2B and customer to customer sales services via its
                  web portal. The group began in 1996 when Dinesh Agarwal and
                  Brijesh Agrawal founded the website IndiaMART.com, a
                  business-to-business portal to connect Indian manufacturers
                  with buyers.
                </p>
              </div>

              <div className='col-xs-6 col-md-3'>
                <h6>Categories</h6>
                <ul className='footer-links'>
                  {cat.map((item) => {
                    const { id, title } = item
                    return (
                      <li key={id}>
                        <a href='#'>{title}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className='col-xs-6 col-md-3'>
                <h6>Quick Links</h6>
                <ul className='footer-links'>
                  {quickLinks.map((link) => {
                    const { id, title } = link
                    return (
                      <li key={id}>
                        <a href='#'>{title}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-sm-6 col-xs-12'>
                <p className='copyright-text'>
                  Copyright &copy; 2021 All Rights Reserved by{' '}
                  <a href='#'>D&H</a>.
                </p>
              </div>

              <div className='col-md-4 col-sm-6 col-xs-12'>
                <ul class='social-icons'>
                  {socialLinks.map((link) => {
                    const { id, title, url, icon } = link
                    return (
                      <li key={id}>
                        <a href={url} className={title}>
                          {icon}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

export default Footer
