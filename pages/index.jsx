import rfModule from '../rf'

const {rfs, group} = rfModule

const ModuleComponent = ({gp}) => {
    return (
        <div>
            <h2>{gp.code}-{gp.desc}</h2>

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
            <div>
                <h1>Requisitos Funcionais</h1>

                <div>{rfs.length}</div>
            </div>

            {group.map(gp => (
                <ModuleComponent key={gp.code} gp={gp}/>    
            ))}
        </>
    )
}

export default Home
