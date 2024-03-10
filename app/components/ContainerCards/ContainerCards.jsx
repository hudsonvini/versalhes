import style from './ContainerCards.module.css'

// Componets
import CardsVideo from '../CardsVideo/CardsVideo'

export default function ContainerCards() {
    return(
        <section className={style.container}>
            <span className={style.sectionSub}>Imóveis</span>
            <h2 className={style.sectionTile}>nossos modelos</h2>

            <div className={style.containerCards}>
                <CardsVideo />
                <CardsVideo />
                <CardsVideo />
                <CardsVideo />
                <CardsVideo />
            </div>

        </section>
    )
}