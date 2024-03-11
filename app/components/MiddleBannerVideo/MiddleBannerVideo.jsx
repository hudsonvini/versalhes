import style from './MiddleBannerVideo.module.css'

export default function MiddlebannerVideo() {
    return(
        <section className={style.container}>
            {/* Background Image */}
            <img className={style.backgroundImage} src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            {/* Nubers Area */}
            <div className={style.numbersArea}>
                {/* Column Numer */}
                <span className={style.columnNumber}>
                    <h3>10+</h3>
                    <p>Projetos</p>
                </span>
                {/* Column Numer */}
                <span className={style.columnNumber}>
                    <h3>25+</h3>
                    <p>Clientes</p>
                </span>
                {/* Column Numer */}
                <span className={style.columnNumber}>
                    <h3>25+</h3>
                    <p>Clientes</p>
                </span>
            </div>

            {/* Middle Area */}
            <h2>garanta agora o desconto no
                <br />
                investimento da sua vida!
            </h2>

            <p>Conectamos vocÊ a imoveis de alta quqalidade em 
                <br />
                licalizações provilefiadas
            </p>

            <button className={style.buttonPlay}>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.500001 16.6018 0.500001 15.0622L0.500002 2.93782C0.500002 1.39822 2.16667 0.435971 3.5 1.20577L14 7.26795Z" fill="#0B3248"/>
                </svg>
            </button>
        </section>
    )
}