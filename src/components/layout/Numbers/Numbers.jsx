import React from 'react';
import CountUp from 'react-countup';
import { useIsClient } from 'usehooks-ts';
import s from './Numbers.module.scss';
import Container from '@/components/ui/Container/Container';
import Pretitle from '@/components/ui/Pretitle/Pretitle';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';

const Numbers = () => {
    const isClient = useIsClient();
    const { t } = useTranslation();

    const cards = t("numbers.cards", { returnObjects: true });

    return (
        <section className={s.numbers}>
            {isClient && (
                <Container>
                    <div className={s.wrapper}>
                        <Pretitle>{t("numbers.pretitle")}</Pretitle>
                        <SectionTitle white>{t("numbers.title")}</SectionTitle>

                        <div className={s.cards}>
                            {cards?.map((card, index) => (
                                <div className={s.card} key={index}>
                                    <div>
                                        <h5>{card.title}</h5>

                                        <h4>
                                            <CountUp
                                                start={0}
                                                end={card.value}
                                                duration={2.5}
                                                delay={index * 0.2}
                                                separator=" "
                                                suffix="+"
                                                useEasing={true}
                                            />
                                        </h4>
                                    </div>

                                    <img src={card.icon} alt={card.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            )}
        </section>
    );
};

export default Numbers;