import gamestackTexture2Large from 'app/assets/Eat-Addis-Food-Delivery-Addis-list.jpg';
import gamestackTexture2Placeholder from 'app/assets/Eat-Addis-Food-Delivery-Addis-list.jpg';
import gamestackTexture2 from 'app/assets/Eat-Addis-Food-Delivery-Addis-list.jpg';
import gamestackTextureLarge from 'app/assets/Eat-Addis-Food-Delivery-Addis-welcome-page.jpg';
import gamestackTexturePlaceholder from 'app/assets/Eat-Addis-Food-Delivery-Addis-welcome-page.jpg';
import gamestackTexture from 'app/assets/Eat-Addis-Food-Delivery-Addis-welcome-page.jpg';
import sliceTextureLarge from 'app/assets/Semah-MCH-Center.png';
import sliceTexturePlaceholder from 'app/assets/Semah-MCH-Center.png';
import sliceTexture from 'app/assets/Semah-MCH-Center.png';
import sprTextureLarge from 'app/assets/ahunShoping.png';
import sprTexturePlaceholder from 'app/assets/ahunShoping.png';
import sprTexture from 'app/assets/ahunShoping.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: '',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Ahun Shopping"
        description="Experience seamless shopping across devices with our
        versatile e-commerce platform. Whether you're on our mobile app or at your
        desktop, discover trending products, secure purchases, and enjoy a personalized shopping experience anytime, anywhere."
        buttonText="View project"
        buttonLink="https://ethiobestprice.com/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="eat ADDIS delivery app"
        description="Design and development for a delivery app built in Flutter"
        buttonText="Try the app"
        buttonLink="https://play.google.com/store/apps/details?id=com.eataddis.customer&hl=en&gl=US"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="SEMAH MCH center"
        description="Design and development for a user friendly website that allows patients to book appointments and get information about the center"
        buttonText="View project"
        buttonLink="https://www.semahmch.com/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
