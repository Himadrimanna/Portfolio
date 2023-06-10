import React from 'react'
import Img1 from '../../assets/portfolio1.png'
import Img2 from '../../assets/portfolio2.png'
import Img3 from '../../assets/portfolio3.png'
import Img4 from '../../assets/portfolio4.png'
import Img5 from '../../assets/portfolio5.png'
import './portfolio.css'

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Img1} alt=''/>
            </div>
            <h3>Overview</h3>
            <p>This app was built using Java and Java swing. Java swing is a GUI library in java to make desktop GUI. A java library called Jsoup Library is used to extract data from a stock market website which is called web scrapping in industries. You will be able to view real time data as the data in GUI will be update automatically after the data in actual website is updated </p>
            <a href='https://github.com/Himadrimanna/Real-time-data-extraction.git' target="_blank" rel="noreferrer"  className='btn btn-primary'>
              Source Code
            </a>
        </article>
        <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Img2} alt=''/>
            </div>
            <h3>Overview</h3>
            <p>This app was built using React Js.This was the first website I made trying to enhance my skills on React Js with a simple Chat App. It is made with a encrypted Password system with RSA algorithm. Technologies used in this project React JS, CSS, Node JS and MongodB. This project was made during 5th sem in my college as a miniproject.</p>
            <a href='https://github.com/Himadrimanna/Chat-App.git' target="_blank" rel="noreferrer" className='btn btn-primary'>
              Source Code
            </a>
        </article>
        <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Img3} alt=''/>
            </div>
            <h3>Overview</h3>
            <p>This app was built using Python. It was a Machine Learning Project where a model was created and trained with a Historical Stock Market Data to Predict the future stock price. The model was trained using linear regression model and the predicted data is shown in the application which was made by Html and CSS</p>
            <a href='https://github.com/Himadrimanna/Stock_Market_prediction.git' target="_blank" rel="noreferrer" className='btn btn-primary'>
              Source Code
            </a>
        </article>
        <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Img4} alt=''/>
            </div>
            <h3>Overview</h3>
            <p>This app was built uisng Flutter and Firebase. It was my personel project which, I made to enhance my skills on flutter native or android application. It was a full fledged e-commerce app with whishlist, cart, searching, payment option and many more feature. As of now it was in building phase and the work is left to be done.</p>
            <a href='https://github.com/Himadrimanna/E-commerce-app.git' target="_blank" rel="noreferrer" className='btn btn-primary'>
              Source Code
            </a>
        </article>
        <article className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Img5} alt=''/>
            </div>
            <h3>Overview</h3>
            <p>This app was built using React JS and is hosted on Firebase. This is the official Hackathon website which was created by me and my team fro the VCET HACKATHON 2022. IT describes the schedule, Sponsors, Timeline, Guidelines and a form to be filled to participate in the Hackathon</p>
            <a href='https://github.com/Himadrimanna/Vcet-Hackathon-2022.git' target="_blank" rel="noreferrer" className='btn btn-primary'>
              Source Code
            </a>
        </article>
      </div>
    </section>
  )
}

export default portfolio