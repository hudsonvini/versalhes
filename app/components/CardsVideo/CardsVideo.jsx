import style from './CadsVideo.module.css'

export default function CardsVideo({urlImage}) {
    return(
        <article className={style.cardVideo}>
            {/* Video Area */}
            <div className={style.videoArea}>
                <img src={urlImage} alt="Imagem Display" />

                <button className={style.buttonPlay}>
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.500001 16.6018 0.500001 15.0622L0.500002 2.93782C0.500002 1.39822 2.16667 0.435971 3.5 1.20577L14 7.26795Z" fill="#0B3248"/>
                    </svg>
                </button>
            </div>

            {/* Side Hover Area */}
            <div className={style.sideHoverArea}>
                <div className={style.areaSuperior}>
                    <h3>Localização</h3>
                    <p>Conectamos vocÊ a imoveis de alta quqalidade em licalizações provilefiadas Conectamos vocÊ a imoveis de alta quqalidade em licalizações provilefiadas</p>
                </div>
            
                <a href="">
                    Falar com corretor
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.767 4.4545C12.2063 4.01517 12.9187 4.01517 13.358 4.4545L20.108 11.2045C20.5473 11.6438 20.5473 12.3562 20.108 12.7955L13.358 19.5455C12.9187 19.9848 12.2063 19.9848 11.767 19.5455C11.3277 19.1062 11.3277 18.3938 11.767 17.9545L17.7215 12L11.767 6.0455C11.3277 5.60616 11.3277 4.89384 11.767 4.4545Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5625 12C3.5625 11.3787 4.06618 10.875 4.6875 10.875H18.375C18.9963 10.875 19.5 11.3787 19.5 12C19.5 12.6213 18.9963 13.125 18.375 13.125H4.6875C4.06618 13.125 3.5625 12.6213 3.5625 12Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </article>
    )
}