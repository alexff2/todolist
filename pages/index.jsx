import style from '../styles/Home.module.css'
import rfModule from '../rf'

const {rfs, group} = rfModule

const ModuleComponent = ({gp}) => {
    return (
        <div className={style.tableContainer}>
            <h2>{gp.code} - {gp.desc}</h2>

            <table>
                <tbody>
                {rfs.filter(rf => rf.groupId === gp.code).map(rf => (
                    <tr key={rf.code}>
                        <td>{rf.code}</td>
                        <td>{rf.desc}</td>
                        <td><input type='checkbox' defaultChecked={rf.isDone} disabled/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

function Home(){
    return(
        <>
            <div className={style.header}>
                <h1>Requisitos Funcionais</h1>

                <div className={style.percent}>
                    <div>
                        {rfs.filter(rf => rf.isDone).length} / {rfs.length}
                    </div>
                </div>
            </div>

            <div className={style.content}>
                {group.map(gp => (
                    <ModuleComponent key={gp.code} gp={gp} />
                ))}
            </div>
        </>
    )
}

export default Home
