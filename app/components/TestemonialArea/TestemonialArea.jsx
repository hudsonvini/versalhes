import style from './TestemonialArea.module.css'

export default function TestemonialArea() {
    return(
        <section className={style.container}>
            {/* Card Testemonial */}
            <article className={style.cardTestemonial}>
                {/* AreaImage */}
                <div className={style.areaImage}>
                    <img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Depoimento 1" />
                    {/* Button More Information*/}
                    <button className={style.buttonMoreInformation}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.4142 4.5 12.75 4.83579 12.75 5.25V18.75C12.75 19.1642 12.4142 19.5 12 19.5C11.5858 19.5 11.25 19.1642 11.25 18.75V5.25C11.25 4.83579 11.5858 4.5 12 4.5Z" fill="#1A96DA"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H18.75C19.1642 11.25 19.5 11.5858 19.5 12C19.5 12.4142 19.1642 12.75 18.75 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12Z" fill="#1A96DA"/>
                        </svg>
                    </button>
                    {/* Date */}
                    <span className={style.date}>10 de maio 2023</span>
                </div>

                {/* Area Information Card */}
                <div className={style.areaInformationCard}>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>metodo</h2>
                        <p className={style.topicText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </div>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>cliente</h2>
                        <p className={style.topicText}>Natura entreprise LTDA</p>
                    </div>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>resultado</h2>
                        {/* Gallery */}
                        <div className={style.galleryTopic}>
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                        </div>
                    </div>
                </div>
            </article>


            {/* Card Testemonial */}
            <article className={`${style.cardTestemonial} ${style.secondType}`}>
            
                {/* Area Information Card */}
                <div className={style.areaInformationCard}>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>metodo</h2>
                        <p className={style.topicText}>Conectamos vocÊ a imoveis de alta quqalidade em licalizações provilefiadas Conectamos vocÊ a imoveis de alta quqalidade em licalizações provilefiadas</p>
                    </div>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>cliente</h2>
                        <p className={style.topicText}>Natura entreprise LTDA</p>
                    </div>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>resultado</h2>
                        {/* Gallery */}
                        <div className={style.galleryTopic}>
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                        </div>
                    </div>
                </div>

                {/* AreaImage */}
                <div className={style.areaImage}>
                    <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Depoimento 1" />
                    {/* Button More Information*/}
                    <button className={style.buttonMoreInformation}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.4142 4.5 12.75 4.83579 12.75 5.25V18.75C12.75 19.1642 12.4142 19.5 12 19.5C11.5858 19.5 11.25 19.1642 11.25 18.75V5.25C11.25 4.83579 11.5858 4.5 12 4.5Z" fill="#1A96DA"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H18.75C19.1642 11.25 19.5 11.5858 19.5 12C19.5 12.4142 19.1642 12.75 18.75 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12Z" fill="#1A96DA"/>
                        </svg>
                    </button>
                    {/* Date */}
                    <span className={style.date}>10 de maio 2023</span>
                </div>
            </article>

            {/* Card Testemonial */}
            <article className={style.cardTestemonial}>
                {/* AreaImage */}
                <div className={style.areaImage}>
                    <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Depoimento 1" />
                    {/* Button More Information*/}
                    <button className={style.buttonMoreInformation}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.4142 4.5 12.75 4.83579 12.75 5.25V18.75C12.75 19.1642 12.4142 19.5 12 19.5C11.5858 19.5 11.25 19.1642 11.25 18.75V5.25C11.25 4.83579 11.5858 4.5 12 4.5Z" fill="#1A96DA"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H18.75C19.1642 11.25 19.5 11.5858 19.5 12C19.5 12.4142 19.1642 12.75 18.75 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12Z" fill="#1A96DA"/>
                        </svg>
                    </button>
                    {/* Date */}
                    <span className={style.date}>10 de maio 2023</span>
                </div>

                {/* Area Information Card */}
                <div className={style.areaInformationCard}>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>metodo</h2>
                        <p className={style.topicText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                    </div>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>cliente</h2>
                        <p className={style.topicText}>Natura entreprise LTDA</p>
                    </div>
                    {/* Topic */}
                    <div className={style.topic}>
                        <h2 className={style.topicTitle}>resultado</h2>
                        {/* Gallery */}
                        <div className={style.galleryTopic}>
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                            <img src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Galeria 1" />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}