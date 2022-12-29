import React from 'react';
import FeedCard from '../components/FeedCard';
import TopProfiles from '../components/TopProfiles';
import PicOne from '../assets/profile-pic-1.jpg';
import PicTwo from '../assets/profile-pic-2.jpg';
import PicThree from '../assets/profile-pic-3.jpg';

const feeds = [
	{
		image: PicOne,
		job: 'Senior Wordpress Developer',
		role: 'Epic Coder',
		pay: '$30/hr',
		tags: ['HTML', 'PHP', 'CSS', 'JavaScript', 'Wordpress'],
		time: 'Full Time',
	},
	{
		image: PicTwo,
		job: 'Simple Classified Site',
		role: 'Front End Developer',
		pay: '$300 - $350',
		tags: [
			'HTML',
			'PHP',
			'CSS',
			'JavaScript',
			'Wordpress',
			'Photoshop',
			'Illustrator',
			'Corel Draw',
		],
		time: '',
	},
	{
		image: PicThree,
		job: 'Senior Wordpress Developer',
		role: 'Epic Coder',
		pay: '$30/hr',
		tags: ['HTML', 'PHP', 'CSS', 'JavaScript', 'Wordpress'],
		time: 'Part Time',
	},
];
const Feed = () => {
	return (
		<div className='flex flex-col gap-3'>
			{feeds.map((data, i) => {
				if (i == 0) {
					return (
						<div key={i}>
							<FeedCard data={data} />
							<TopProfiles />
						</div>
					);
				} else {
          return (
            <FeedCard
              key={i}
              data={data}
            />
          )
				}
			})}
			<div></div>
		</div>
	);
};

export default Feed;
