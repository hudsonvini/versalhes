import style from './ContainerCards.module.css'

// Componets
import CardsVideo from '../CardsVideo/CardsVideo'

export default function ContainerCards() {
    return(
        <section className={style.container}>
            <span className={style.sectionSub}>Imóveis</span>
            <h2 className={style.sectionTile}>nossos modelos</h2>

            <div className={style.containerCards}>
                <CardsVideo 
                    urlImage={'https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
                <CardsVideo 
                    urlImage={'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
                <CardsVideo 
                    urlImage={'https://images.unsplash.com/photo-1613082294483-fec382d8367e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
                <CardsVideo 
                    urlImage={'https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
                <CardsVideo 
                    urlImage={'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                />
            </div>

        </section>
    )
}