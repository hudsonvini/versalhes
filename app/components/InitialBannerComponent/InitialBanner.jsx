import style from './initialBanner.module.css'

export default function InitialBanner() {
    return(
        <section className={style.container}>
            {/* text area */}
            <div className={style.textArea}>
                <h1>Construa seu
                    <b>Próximo lar</b>
                </h1>
                <p>Conectamos vocÊ a imoveis de alta quqalidade em licalizações provilefiadas</p>
                <a href="">ver mais</a>
            </div>
            {/* Image Area */}
            <div className={style.imageArea}>
                <img src="./images/imagePrincipal.png" alt="" />
            </div>
        </section>
    )
}