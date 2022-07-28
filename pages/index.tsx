import type { NextPage } from 'next';
import Section from '../components/Section';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Title from '../components/TitleHomePages';
interface BioRowProps {
  year: string;
  desc: string;
}
const BioRow = ({ year, desc }: BioRowProps) => {
  return (
    <div className="flex mb-2">
      <p className="mr-3 w-[20%] font-semibold ">{year}</p>
      <p className="flex-1">{desc}</p>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <Section>
      <div className="w-full mx-auto ">
        {/*About me*/}
        <div className="text-white mb-[40px]">
          <Title title={'Work'} />
          <p className="mb-8">
            I´m a full-stak developer focused on building beatufil and useful
            user interfaces. I have a degree in manufacturing and industrial
            engineering but my passion for digital products and services bring
            me to the path of development.Glad for finding the correct people
            I´m also a consultant in web services for startups. When not online
            I love to practice martial arts and watch movies. You can checkout
            the portfolio section to learn more about my work!
          </p>
          <div className="flex justify-center">
            <button className=" bg-indigo-200   text-indigo-800 px-4 py-2 font-medium rounded-sm transition-all  hover:scale-105">
              My Portfolio
            </button>
          </div>
        </div>
        {/*Bio*/}
        <div className="text-white mb-[40px]">
          <Title title={'Bio'} />
          <div>
            <BioRow year="1995" desc="Born in Mexico" />
            <BioRow
              year="2016"
              desc="Complete Engeneering degree on the Instituto Tecnologico y de Estudios Superiores de Monterrey"
            />
            <BioRow
              year="2017 to 2020"
              desc="Work as quality engineer on automotive insudstry"
            />
            <BioRow
              year="2020 to date"
              desc="Web developer, freelancer and collaborator at launchy.me "
            />
          </div>
        </div>
        {/*skills*/}
        <div className="text-white mb-[40px]">
          <Title title={'Skills'} />
          <Skills />
        </div>
        {/*Contact*/}
        <div className="text-white">
          <Title title={'Contact me'} />
          <Contact />
        </div>
      </div>
    </Section>
  );
};

export default Home;
