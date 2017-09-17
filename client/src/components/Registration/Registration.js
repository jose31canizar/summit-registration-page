import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import Info from '../Info/Info'
import SpeakerIntro from '../SpeakerIntro/SpeakerIntro'
import Speakers from '../Speakers/Speakers'
import FeaturedBy from '../FeaturedBy/FeaturedBy'
import CallToAction from '../CallToAction/CallToAction'
import Benefits from '../Benefits/Benefits'
import CommonQuestions from '../CommonQuestions/CommonQuestions'
import Host from '../Host/Host'

import HeaderData from '../../data/header.json'
import InfoData from '../../data/info.json'
import SpeakerIntroData from '../../data/speaker-intro.json'
import SpeakersData from '../../data/speakers.json'
import FeaturedByData from '../../data/featured-by.json'
import CallToActionData from '../../data/call-to-action.json'
import BenefitsData from '../../data/benefits.json'
import CommonQuestionsData from '../../data/common-questions.json'
import HostData from '../../data/host.json'
import './Registration.styl'

class Registration extends Component {
  render() {
    return (
      <div className="registration">
        <NavBar />
        <Header data={HeaderData[0]}/>
        <Info data={InfoData[0]}/>
        <SpeakerIntro data={SpeakerIntroData[0]} />
        <Speakers data={SpeakersData[0]} />
        <FeaturedBy data={FeaturedByData[0]} />
        <CallToAction data={CallToActionData[0]} />
        <Benefits data={BenefitsData[0]} />
        <CallToAction data={CallToActionData[1]} />
        <CommonQuestions data={CommonQuestionsData} />
        <CallToAction data={CallToActionData[2]} />
        <Host data={HostData[0]} />
        <CallToAction data={CallToActionData[3]} />
      </div>
    );
  }
}

export default Registration;
