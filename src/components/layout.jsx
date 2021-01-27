import l from './css/layout.module.css';


const Layout = ({ title, descr, id, url, color }) => {
    let layoutStyle = {};
    if (url) layoutStyle.backgroundImage = `url('${url}')`;
    if (color) layoutStyle.backgroundColor = `${color}`;
    return (
        <section
            className={l.root}
            id={id}
            style={layoutStyle}>
            <div className={l.wrapper}>
                <article>
                    <div className={l.title}>
                        <h3>{title}</h3>
                        <span className={l.separator}></span>
                    </div>
                    <div className={l.desc.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>

    );
}
export default Layout;
