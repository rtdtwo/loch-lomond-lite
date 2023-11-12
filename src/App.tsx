import { Col, Image, Row, Container, Card } from 'react-bootstrap';
import './App.css';
import Portrait from './assets/portrait.jpeg';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiEmail, mdiBriefcaseOutline, mdiSchoolOutline, mdiYoutube } from '@mdi/js';


const App = () => {
	return <div className='page-container'>
		<div className='hero'>
			<Container>
				<Row className='align-items-center p-5'>
					<Col sm="12" className='text-center'>
						<Image
							className='avatar mb-4'
							src={Portrait}
							roundedCircle
							width={200}
							height={200} />
					</Col>
					<Col sm="12" className='text-center'>
						<h2 className='hero-title'>Hi, I'm Rishabh.</h2>
						<p className='hero-text'>
							Financial Software Associate at Galatea Associates, LLC
							<br />
							MS in Computer Science, University of Florida, 2023
						</p>
						<div>
							<a href='https://www.linkedin.com/in/rishabhtatiraju/' target='_blank' rel='noreferrer'>
								<Icon color="white" path={mdiLinkedin} size={1} className='m-3' />
							</a>
							<a href='https://www.github.com/rtdtwo/' target='_blank' rel='noreferrer'>
								<Icon color="white" path={mdiGithub} size={1} className='m-3' />
							</a>
							<a href='https://www.youtube.com/channel/UCyX2NEezmwNm5IkE3gVLEbg' target='_blank' rel='noreferrer'>
								<Icon color="white" path={mdiYoutube} size={1.2} className='m-3' />
							</a>
							<a href='mailto:tatiraju.rishabh@gmail.com' target='_blank' rel='noreferrer'>
								<Icon color="white" path={mdiEmail} size={1} className='m-3' />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		<div className='projects p-5'>
			<Container>
				<h2 className='section-title text-color-dark text-center mb-3'>PROJECTS</h2>
				<p className='section-subtitle text-color-sub-dark text-center mb-5'>Some really cool stuff.</p>
				<Row className='justify-content-center'>
					<Col sm="6" lg="4" xl="3">
						<a href='https://rtdtwo.github.io/weathair/' target='_blank' rel='noreferrer'>
							<Card className='card-with-logo mb-3'>
								<Image className='ps-5 pe-5 image-fit-container' src='https://rtdtwo.github.io/weathair/logo.png' />
							</Card>
						</a>
					</Col>
					<Col sm="6" lg="4" xl="3">
						<a href='https://rtdtwo.github.io/voyager/' target='_blank' rel='noreferrer'>
							<Card className='card-with-logo mb-3'>
								<Image className='ps-5 pe-5 image-fit-container' src='https://rtdtwo.github.io/voyager/static/media/logo-full-aqua.c7bfa860.svg' />
							</Card>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	</div>
}

export default App